define(function (require, exports, module) {
    var CONFIG = require("common/config.js");
    var UTIL = require("common/util.js");
    var templates = require('common/templates');
    var nDisplayItems = 10;
    var _pageNO = 1;
    var languageJSON = CONFIG.languageJson.user;
    exports.init = function () {
        selectLanguage();
        exports.loadUsersPage(1); //加载默认页面
    }

    /**
     * 语言切换绑定
     */
    function selectLanguage() {
        $("#userTitle").html(languageJSON.userManagement);
        $("#user_add").html('<i class="fa fa-user-plus"></i>' + languageJSON.createNewUser);
    }

    // 加载页面数据
    exports.loadUsersPage = function (pageNum) {
        _pageNO = pageNum;
        // loading
        $("#usersTable tbody").html('<i class="fa fa-refresh fa-spin" style="display:block; text-align: center; padding:10px;"></i>');
        $("#usersLisTitle").html("");

        $(".fa.fa-check-square-o").attr("class", "fa fa-square-o");
        exports.pNum = pageNum;
        var data = JSON.stringify({
            project_name: CONFIG.projectName,
            action: 'GetUsersAll',
            Pager: {
                "total": -1,
                "per_page": 10,
                "page": pageNum,
                "orderby": "",
                "sortby": "desc",
                "keyword": ""
            }
        });
        var url = CONFIG.serverRoot + '/backend_mgt/v2/roles';
        UTIL.ajax('post', url, data, render);


    }

    function render(json) {
        $("#usersTable tbody").html("");
        //翻页
        var totalPages = Math.ceil(json.Pager.total / nDisplayItems);
        totalPages = Math.max(totalPages, 1);
        $('#users-table-pager').jqPaginator({
            totalPages: totalPages,
            visiblePages: CONFIG.pager.visiblePages,
            first: CONFIG.pager.first,
            prev: CONFIG.pager.prev,
            next: CONFIG.pager.next,
            last: CONFIG.pager.last,
            page: CONFIG.pager.page,
            currentPage: _pageNO,
            onPageChange: function (num, type) {
                if (type === 'change') {
                    _pageNO = num;
                    $('#users-table-pager').jqPaginator('destroy');
                    exports.loadUsersPage(_pageNO);
                }
            }
        });
        //拼接
        if (json.Users != undefined) {
            var rolData = json.Users;
            $("#usersTable tbody").append('<tr>' +
                // '<th class="users_ID">UID</th>'+
                '<th class="users_name">' + languageJSON.username + '</th>' +
                '<th class="role_name">' + languageJSON.role + '</th>' +
                '<th class="users_email">' + languageJSON.email + '</th>' +
                '<th class="description">' + languageJSON.description + '</th>' +
                '<th class="user_resetPwd">' + languageJSON.operation + '</th>' +
                '</tr>');
            for (var x = 0; x < rolData.length; x++) {
                //var stringArry;
                var rID = rolData[x].RoleID;
                var rName = rolData[x].RoleName;
                var uName = rolData[x].USERNAME;
                var description = rolData[x].Description;
                var uID = rolData[x].ID;
                var email = rolData[x].EMAIL;
                var uPass = rolData[x].PASSWORD;
                if (rName !== undefined) {
                    if (uID === 1) {
                        var operation = '<a class="reset_psw">' + languageJSON.resetPassword + '</a> ' +
                            '| <a class="pull-right" style="visibility: hidden"><i class="glyphicon glyphicon-trash user-delete"></i></a>';
                    } else {
                        var operation = '<a class="reset_psw">' + languageJSON.resetPassword + '</a> ' +
                            '| <a class="users_delete pull-right"><i class="glyphicon glyphicon-trash user-delete"></i></a>';
                    }
                } else {
                    rName = languageJSON.undistributed;
                }
                var roltr = '<tr class="user-row" userID="' + uID + '" userName="' + uName + '" userEmail="' + email + '" userDes="' + description + '" userPass="' + uPass + '" roleID="' + rID + '">' +
                    // '<td class="users_id">' + uID + '</td>' +
                    '<td class="users_name"><i class="fa fa-user"></i><a class="user_name">' + uName + '</a></td>' +
                    '<td class="role_name">' + rName + '</td>' +
                    '<td class="users_email">' + email + '</td>' +
                    '<td class="description" style="width:300px;overflow:hidden;text-overflow:ellipsis;">' + description + '</td>' +
                    '<td class="user_resetPwd">' + operation + '</td>' +
                    '</tr>';
                $("#usersTable tbody").append(roltr);
            }
            exports.pageNum = _pageNO;
            //添加
            $("#user_add").click(function () {
                exports.type = "add";
                UTIL.cover.load('resources/pages/user/user_edit.html');
            })
            //删除
            $(".users_delete").click(function () {
                var self = $(this);
                var currentID = self.parent().parent().attr("userID");
                if (confirm(languageJSON.cf_delUser + "？")) {
                    var data = JSON.stringify({
                        project_name: CONFIG.projectName,
                        action: 'DELETE'
                    });
                    var url = CONFIG.serverRoot + '/backend_mgt/v2/userdetails/' + currentID;
                    UTIL.ajax('post', url, data, function (msg) {
                        if (msg.rescode == 200) {
                            alert(languageJSON.al_delSuc)
                        } else {
                            alert(languageJSON.al_delFaild)
                        }
                        ;
                        exports.loadUsersPage(_pageNO); //刷新页面
                    });
                }
            });
            //编辑
            $(".user_name").click(function () {
                var self = $(this);
                exports.type = "edit";
                var uName = self.html();
                var currentID = self.parent().parent().attr("userID");
                var uEmail = self.parent().parent().attr("userEmail");
                var uDes = self.parent().parent().attr("userDes");
                var uPass = self.parent().parent().attr("userPass");
                var rID = self.parent().parent().attr("roleID");
                exports.userName = uName;
                exports.userID = currentID;
                exports.userEmail = uEmail;
                exports.userDes = uDes;
                exports.userPass = uPass;
                exports.roleID = rID;
                UTIL.cover.load('resources/pages/user/user_edit.html');
            });
            //重置密码
            $(".reset_psw").click(function () {
                var self = $(this);
                var currentID = self.parent().parent().attr("userID");
                var uName = self.parent().parent().attr("userName");
                exports.userName1 = uName;
                exports.userID1 = currentID;
                UTIL.cover.load('resources/pages/user/user_psw.html');
            });
        }
    }
})
