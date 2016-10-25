define(function (require, exports, module) {

    var CONFIG = require('common/config'),
        UTIL = require("common/util.js"),
        TREE = require("common/treetree.js"),
        _tree,
        languageJSON;

    exports.save;
    exports.title;
    exports.roleID;
    exports.close;

    exports.init = function () {
        selectLanguage();
        $('#mul-TermClass-title').html(exports.title);
        initTree();

        // 关闭
        $('#mul-term-class-close').click(function () {
            if (exports.close !== undefined && exports.close !== '') {
                exports.close();
                exports.close = '';
            } else {
                UTIL.cover.close(2);
            }
        })

        // 保存
        $('#mul-term-class-save').click(function () {
            var categoryList = _tree.getSelectedNodeID();
            categoryList = JSON.parse(JSON.stringify(categoryList).replace(/nodeId/g, 'categoryID'));

            if (categoryList.length === 0) {
                alert(languageJSON.al_selectTt);
            } else {
                exports.save(categoryList);
            }
        })
    }

    /**
     * 语言切换绑定
     */
    function selectLanguage() {
        languageJSON = CONFIG.languageJson.termList;
        $("#mul-term-class-save").html(languageJSON.save);
    }

    function initTree() {
        var dataParameter = {
            "project_name": CONFIG.projectName,
            "action": "getTree"
        };

        if (exports.roleID) {
            dataParameter.roleID = Number(exports.roleID);
            exports.roleID = '';
        }

        UTIL.ajax(
            'POST',
            CONFIG.serverRoot + '/backend_mgt/v2/termcategory',
            JSON.stringify(dataParameter),
            function (data) {
                if (data.rescode === '200') {
                    data = data.TermTree.children;
                    _tree = {domId: 'mul-termclass-tree', checkMode: 'multiple'};
                    _tree = TREE.new(_tree);
                    _tree.createTree($('#' + _tree.domId), data);
                    // 选中、打开第一个结点
                    var li = $('#' + _tree.domId).find('li:nth(0)');
                    _tree.openNode(li);
                    _tree.setFocus(li);
                } else {
                    alert(languageJSON.al_gainTtFaild);
                }
            }
        );
    }

});
