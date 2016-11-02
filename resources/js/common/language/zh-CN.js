define(function (require, exports, module) {
    exports.JSON = {
        langName: "中文(简体)",
        iconUrl: "resources/img/national_flag/china.png",
        first: "首页",
        prev: "上一页",
        next: "下一页",
        last: "首页",
        index: {
            title: "CLEAR 信息发布系统",
            resetPassword: "修改密码",
            logout: "登出",
            dpUpl: "点击打开上传页面",
            menu: {
                console: "控制台",
                termList: "终端",
                termLog: "终端日志",
                resource: "资源管理",
                resourceList: "资源存储",
                releases: "发布管理",
                channelList: "频道管理",
                layoutList: "节目模版",
                layout: "模版",
                administratorTools: "管理员工具",
                userList: "用户管理",
                roleList: "角色权限",
                oplog: "操作日志"
            },
            errorRelogin: "登录过期，请重新登录！",
            errorRelogin2: "请重新登录！",
            errorNoPermissions: "您没有任何权限，请联系管理员！"
        },
        termList: {
            termBoxTitle: "终端",
            termTreeTitle: "终端分类",
            allTerm: "全部终端",
            uncategorizedTerm: "未分类终端",
            edit: "编辑",
            delete: "删除",
            add: "添加",
            batchConfiguration: "批量配置该分类终端",
            search: "搜索终端",
            termMove: "移动到...",
            awaken: "唤醒",
            dormancy: "休眠",
            running: "运行",
            offline: "离线",
            online: "在线",
            download: "下载",
            preDownload: "预下载",
            noTownloadTask: "无下载任务",
            downloaded: "已下载",
            notDownloaded: "未下载",
            list_currentChannel: "当前频道",
            list_currentLayout: "当前节目",
            list_currentVideo: "当前视频",
            disk: "磁盘",
            RAM: "内存",
            list_done: "完成（成功）",
            list_queryLog: "查看日志",
            list_querySreen: "屏幕快照",
            list_empty: "（空）",
            cf_delete: "确定删除所选终端？",
            cf_awaken: "确定唤醒所选终端？",
            cf_dormancy: "确定休眠所选终端？",
            cf_deleteCf1: "确定删除终端分类",
            cf_deleteCf2: "请再次确认，确定删除终端分类",
            cf_deleteCf3: "该分类下的终端不会被删除",
            al_delError: "'删除终端失败",
            al_comSuc: "命令已发送",
            al_comFaild: "命令执行失败",
            al_getListFaild: "获取终端列表失败",
            al_ssFaild: "截屏失败，请重试",
            al_addCfFaild: "新建终端分类失败",
            al_deleteRoot: "不能删除根目录",
            al_deleteRootF: "删除终端分类失败",
            al_editRootF: "编辑终端分类失败",
            conf_lbl_basicInfo: "基本信息",
            conf_lbl_termName: "终端名称",
            conf_lbl_currentCha: "当前频道",
            conf_lbl_preLssued: "预下发频道",
            conf_lbl_termInfo: "终端信息",
            conf_lbl_CFInfo: "配置信息",
            conf_lbl_updateServer: "升级服务器",
            conf_lbl_updateServerADD: "升级服务器地址",
            conf_lbl_logServer: "日志服务器",
            conf_lbl_logServerADD: "日志服务器地址",
            conf_lbl_volume: "音量",
            conf_lbl_city: "城市",
            conf_city_placeholder: "请选择城市（终端将会显示所选城市的天气信息）",
            conf_lbl_work: "工作区间",
            conf_lbl_download: "下载区间",
            conf_lbl_timeRestart: "定时重启",
            conf_lbl_rotate: "屏幕旋转",
            conf_ddl_soft: "软件旋转模式",
            conf_ddl_hard: "硬件旋转模式",
            conf_ddl_clockwise : "顺时针",
            conf_ddl_counterclockwise: "逆时针",
            conf_lbl_outputMode: "屏幕输出模式",
            conf_lbl_remoteADB: "远程调试ADB",
            conf_lbl_debug: "打印本地日志",
            conf_lbl_sync: "同步",
            conf_lbl_syncID: "终端同步ID",
            conf_lbl_syncIP: "同步组播IP",
            conf_lbl_syncPort: "同步端口号",
            conf_lbl_syncTimeout: "等待命令时间",
            gain: "获取",
            gain_wait: "获取中，请稍后",
            save: "保存",
            cancel: "取消",
            everyday: "每天",

            Monday: "周一",               //要求缩写
            Tuesday: "周二",
            Wednesday: "周三",
            Thursday: "周四",
            Friday: "周五",
            Saturday: "周六",
            Sunday: "周日",

            ON: "开",
            OFF: "关",
            nothing: "无",
            al_dlLogFaild: "下载日志失败，请重试",
            al_gainLogFaild: "获取日志超时，请重试",
            al_selectWorkCycle: "请选择工作区间重复周期",
            al_selectWorkStart: "请填入工作区间开始时间",
            al_cfWorkStart: "请填入正确的工作区间开始时间",
            al_selectWorkEnd: "请填入工作区间结束时间",
            al_cfWorkEnd: "请填入正确的工作区间结束时间",
            al_workStartEnd: "工作区间结束时间不能早于开始时间",
            al_dlStart: "请填入下载区间开始时间",
            al_cfStart: "请填入正确的下载区间开始时间",
            al_dlEnd: "请填入下载区间结束时间",
            al_cfEnd: "请填入正确的下载区间结束时间",
            al_timing: "请填入定时重启时间",
            al_cfTiming: "请填入正确的定时重启时间",
            al_syncID: "请输入终端同步ID",
            al_cfSyncID: "同步ID格式输入不正确，请重新输入",
            al_syncIP: "请输入同步组播IP地址",
            al_cfSyncIP: "同步组播IP地址输入不正确，请重新输入",
            al_saveTermInfoFaild: "保存终端信息失败",
            al_saveSuc: "保存成功",
            al_saveTermConfFaild: "保存终端配置失败",
            al_saveTermConfCFFaild: "保存终端分类配置失败",
            al_gainCityInfoFaild: "获取城市信息失败",
            al_gainTermInfoFaild: "获取终端配置信息失败",
            al_gainTermInfoCFFaild: "获取终端分类配置信息失败",
            cap_title: "此窗口是对该分类下所有终端的统一配置",
            cap_foot: "配置保存中，终端数量较多，请等待...",
            al_selectTt: "请选择终端分类",
            al_gainTtFaild: "获取终端分类失败",
            al_selectTtT: "请选择终端分类/终端",
            all: "全部",
            pl_searchTerm: "搜索终端",
            screenshots: "截屏",
            screenshotting: "截屏中",
            screenshotsTimeout: "截屏超时，请重试"
        },
        termLog: {
            title: "日志",
            title_right: "终端MAC信息可以在 控制台->终端 里找到",
            pl_search: "终端mac搜索",
            termLog: "终端日志",
            termName: "终端名",
            termMac: "终端MAC",
            eventType: "类型",
            event: "日志内容",
            date: "操作日期",
            play: "播放",
            pause: "暂停",
            stop: "停止",
            startPlay: "开始播放",
            stopPlay: "停止播放",
            empty: "空",
        },
        channel: {
            title1: "频道",
            title2: "频道列表",
            title3: "发布到",
            prompt1: "把频道发布到终端后，如果频道内容发生变化，终端的播放内容也会随之更改",
            pl_search: "搜索频道",
            publish: "发布",
            prePublish: "预发布",
            copy: "复制",
            delete: "删除",
            importOffline: "导入离线包",
            exportOffline: "生成离线包",
            chn_submit: "提交审核",
            chn_pass: "审核通过",
            chn_unpass: "审核不通过",
            pendingAudit: "待审核",
            pendingSubmit: "待提交",
            pass: "已通过",
            unpass: "未通过",
            addChannel: "添加频道",
            copySuc: "复制成功",
            copyFaild: "复制失败",
            deleteSuc: "删除成功",
            deleteFaild: "删除失败",
            checkStatus: "审核状态",
            channelName: "频道名",
            chn_portStatus: "状态",
            chn_create: "创建人",
            chn_createTime: "创建时间",
            chn_operation: "操作",
            gainStatusFaild: "获取状态失败",
            pendingProd: "等待生成",
            producing: "生成中",
            prodSuc: "生成成功",
            prodFaild: "生成失败",
            download: "下载",
            empty: "空",
            al_sumbmit: "已提交",
            al_sumbmitFaild: "提交失败",
            al_check: "已审核",
            al_checkFaild: "审核失败",
            al_checkFailInfo: "这里是审核不通过的反馈信息",
            al_publishSuc: "频道发布成功！",
            al_publishFaild: "频道发布失败！",
            al_prePublishSuc: "频道预发布成功！",
            al_prePublishFaild: "频道预发布失败！",
            cf_delete: "确定删除该频道？",
            cf_exportOffline: "确定生成该频道的离线包？",
            al_exportFaild: "生成失败",
            title4: "批量编辑",
            playDuration: "播放时长",
            pl_playDuration: "请输入播放时长",
            playTime: "播放次数",
            pl_playTime: "请输入播放次数",
            prompt2: "视频和音频、Office、PDF资源无法修改时长",
            submit: "提交",
            al_batchDuration: "请输入正确的资源播放时长！",
            ctrTitle1: "视频控件",
            ctrTitle2: "图片控件",
            ctrTitle3: "音频控件",
            ctrTitle4: "文本控件",
            ctrTitle5: "时钟控件",
            ctrTitle6: "天气控件",
            ctrTitle7: "Office控件",
            Normal: "常规",
            Marquee: "走马灯",
            WebURL: "在线网页",
            flipInterval: "翻页间隔",
            reflashInterval: "刷新间隔",
            pl_input: "请输入",
            second: "秒",
            color: "颜色",
            rightToleft: "从右到左",
            static: "静止",
            bgcolor: "背景颜色",
            pl_bgcolor: "请选择背景颜色",
            fontColor: "字体颜色",
            pl_fontColor: "请选择时钟字体颜色",
            pl_weatherColor: "请选择天气字体颜色",
            switchingInterval: "切换间隔",
            None: "无动画",
            Random: "随机",
            batchOperation: "批量编辑",
            staDuration: "统计时长",
            addResource: "添加资源",
            SequencePlay: "顺序播放",
            RandomPlay: "随机播放",
            PercentPlay: "比例播放",
            Monday: "星期一",
            Cloudy: "多云",
            wind: "无持续风向：微风",
            today: "今天",
            Beijing: "北京",
            noControls: "当前无控件",
            resourceName: "文件名",
            duration: "时长",
            times: "次数",
            transparentPrompt: "注：最右侧为透明度",
            left: "左距离",
            top: "上距离",
            size: "尺寸",
            size2: "大小",
            status: "状态",
            staDuration: "统计时长",
            video: "视频",
            image: "图片",
            live: "直播",
            al_duration: "请输入资源时长",
            al_durationEr: "请输入正确的资源时长",
            al_times: "请输入资源次数",
            al_flipTime: "请填写翻页间隔时间",
            al_speed: "请选择滚动速度",
            al_weaCutTime: "请输入天气切换间隔时间",
            done: "完成",
            resourceList: "资源列表",
            pl_searchVideo: "搜索视频",
            pl_searchImage: "搜索图片",
            pl_searchAudio: "搜索音频",
            pl_searchText: "搜索文本",
            pl_searchLive: "搜索直播",
            pl_searchOffice: "搜索Office/PDF",
            al_videoFormat: "当前视频格式暂不支持预览！",
            al_audioFormat: "当前音频格式暂不支持试听！",
            nolayout: "无节目",
            cancel: "取消",
            previewProgram: "预览节目",
            cancelPreview: "取消预览",
            annually: "每年",
            monthly: "每月",
            everyDay: "每天",
            everyHour: "每时",
            everyMin: "每分",
            everySecond: "每秒",
            everyWeek: "每周",
            every: "每",
            year: "年",
            month: "月",
            week: "周",
            day: "日",
            min: "分",
            hour: "点",

            Monday: "周一",           //要求缩写
            Tuesday: "周二",
            Wednesday: "周三",
            Thursday: "周四",
            Friday: "周五",
            Saturday: "周六",
            Sunday: "周日",
            Jan: "一月",
            Feb: "二月",
            Mar: "三月",
            Apr: "四月",
            May: "五月",
            Jun: "六月",
            Jul: "七月",
            Aug: "八月",
            Sep: "九月",
            Oct: "十月",
            Nov: "十一月",
            Dec: "十二月",

            termCf: "终端分类",
            all: "全部",
            publishInfo: "发布信息",
            prePublishInfo: "预发布信息",
            save: "保存",
            saveSubmit: "保存并提交",
            savePublish: "保存并发布",
            clickAddLayout: "点击添加新节目",
            timingProgram: "定时节目",
            regularProgram: "常规节目",
            add: "添加",
            sequence: "顺序",
            ratio: "比例",
            loading: "正在加载数据",
            prompt1: "温馨提示：当前预览为最后一次保存的内容",
            strarTime: "开始时间",
            endTime: "失效时间",
            timingTrigger: "定时触发",
            layout: "模版",
            width: "宽",
            height: "高",
            timer_annually: "每年...月",
            timer_monthly: "每月第...天",
            timer_everyDay: "每天第...小时",
            timer_everyHour: "每小时第...分钟",
            timer_everyMin: "每分钟第...秒",
            al_noLayout: "没有选中节目",
            cf_deleteLayout: "确定删除该节目？",
            prompt2: "温馨提示:正在保存，可能需要几分钟时间，请耐心等待",
            al_saveSuc: "保存成功",
            al_saveFaild: "保存失败",
            VideoBox: "视频控件",
            AudioBox: "音频控件",
            WebBox: "文本控件",
            ImageBox: "图片控件",
            ClockBox: "时钟控件",
            WeatherBox: "天气控件",
            OfficeBox: "Office控件",
            al_chnSavePubSuc: "频道保存并发布成功！",
            al_chnSavePubFaild: "频道保存并发布失败！",
            al_chnSaveSubSuc: "保存并提交审核成功！",
            al_chnSaveSubFaild: "保存并提交审核失败！",
            al_startTime: "请输入正确的节目生效时间！",
            al_endTime: "请输入正确的节目失效时间！",
            al_resetTime: "节目生效时间晚于失效时间，请重新输入！",
            newChannel: "新建频道",
            editLayout: "编辑模版",
            exitEdit: "退出编辑",
            saveExit: "保存并退出",
            toolbar: "工具栏",
            text: "文本",
            clock: "时钟",
            weather: "天气",
            music: "音乐",
            canvasArea: "画布区",
            ctrlProperties: "控件属性",
            promptSteps1: "在工具栏中点击想要创建的控件",
            promptSteps2: "在画布上拖拽画出大小",
            promptSteps3: "拖拽调整大小和位置，也可以在右侧属性栏输入数值",
            promptSteps4: "音乐控件不占面积，可点击直接添加",
            edit: "编辑",
            bgColor: "背景色",
            addBgcolor: "添加背景图",
            cancelBgcolor: "取消背景图",
            currentCtrl: "当前控件",
            layer: "层",
            upLayer: "上移一层",
            downLayer: "下移一层",
            selectLayout: "选择模版",
            searchLayout: "搜索模版",
            newLayout: "新建模版",
            toastW: "宽度太小了",
            toastH: "高度太小了",
            toastO: "控件超出了容器",
            titleLayout: "节目模版",
            prompt3: "使用模版可以制作强大的分屏节目，但需要预先将它们做好",
            layoutList: "模版列表",
            addLayout: "添加模版",
            cf_delLayout: "确定删除该模板？",
            al_delLayoutFaild: "删除失败，有频道正在使用它！",
            layoutName: "模板名"
        },
        material: {
            resourceTitle: "资源存储",
            video: "视频",
            image: "图片",
            audio: "音频",
            text: "文本",
            live: "直播",
            download: "下载",
            edit: "编辑",
            delete: "删除",
            submitCheck: "提交审核",
            addResource: "添加资源",
            upload: "上传",
            addText: "添加文本",
            addLive: "添加直播",
            refrash: "刷新列表",
            checkPass: "审核通过",
            checkUnpass: "审核不通过",
            pendingAudit: "待审核",
            pendingSubmit: "待提交",
            pass: "已通过",
            unpass: "未通过",
            pl_searchVideo: "搜索视频",
            pl_searchImage: "搜索图片",
            pl_searchAudio: "搜索音频",
            pl_searchText: "搜索文本",
            pl_searchLive: "搜索直播",
            pl_searchOffice: "搜索Office/PDF",
            checkStatus: "审核状态",
            resourceName: "文件名",
            size: "大小",
            duration: "时长",
            transformStatus: "转换状态",
            createUser: "创建人",
            createTime: "创建时间",
            tfFaild: "转换失败",
            pendingTf: "待转换",
            transforming: "转换中",
            tfSuc: "转换成功",
            al_videoFormat: "当前视频格式暂不支持预览！",
            al_audioFormat: "当前音频格式暂不支持试听！",
            cf_delResource: "删除资源会删除频道对应的资源,确定删除资源？",
            al_submitted: "已提交",
            al_submitFaild: "提交失败",
            al_audited: "已审核",
            al_auditFaild: "审核失败",
            liveName: "直播源名称",
            liveUrl: "直播源地址",
            submit: "提交",
            editLiveUrl: "编辑直播源",
            addLiveUrl: "添加直播源",
            al_addSuc: "添加成功",
            al_addFaild: "提交失败",
            al_editSuc: "修改成功",
            al_editFaild: "修改失败",
            al_inLiveName: "请输入直播源名称！",
            al_inLiveUrl: "请输入直播源地址！",
            webName: "文本资源名称",
            webType: "文本类型",
            normalText: "普通文本",
            webUrl: "网页地址",
            queryCheck: "查看已通过审核的内容",
            exit: "退出",
            editWeb: "编辑文本",
            addWeb: "添加文本",
            al_saveSubSuc: "保存并提交成功",
            al_saveSubFaild: "保存并提交失败",
            checkedContent: "已通过审核的内容",
            al_inWebName: "请输入文本资源名称",
            al_inWebUrl: "请输入URL地址",
            al_inRiWebUrl: "请输入正确的URL地址",
            name: "名称",
            al_editWebUrl: "编辑在线网页",
            al_addWebUrl: "添加在线网页",
            al_inName: "请输入名称",
            al_inUrl: "请输入在线网页地址",
            resoureEdit: "资源编辑",
            al_inResourceName: "请输入资源名称",
            cf_preview: "图片内存占用比较大,可能会造成浏览器卡顿，确定要继续预览吗",
            uploadProgress: "上传进度",
            speed: "速度",
            status: "状态",
            cancelUpload: "取消上传",
            canceled: "已取消",
            uploadFaild: "上传失败",
            uploadSuc: "上传成功",
            al_editText: "当前正在编辑文本，是否离开当前页面",
            al_uploading: "当前正在上传文件，是否离开当前页面",
            al_rightBtn: "可点击右上方的云按钮重新打开上传页面",
            al_cfCancelUpload: "有资源正在上传，确定取消上传",
            al_cannotUpload: "无法上传该格式文件",
            noContent: "无内容"
        },
        user: {
            administrator: "超级管理员",
            userManagement: "用户管理",
            createNewUser: "创建新用户",
            username: "用户名",
            role: "角色",
            email: "邮箱",
            description: "备注",
            operation: "操作",
            resetPassword: "重置密码",
            undistributed: "未分配",
            cf_delUser: "确定删除该用户",
            al_delSuc: "删除成功",
            al_delFaild: "删除失败",
            updatePsw: "修改密码",
            resetPsw: "重置密码",
            newPsw: "新密码",
            cfPsw: "确认密码",
            submit: "提交",
            al_noPsw: "密码不能为空",
            al_pswNotConsistent: "密码不一致，请重新输入",
            al_pswUpdateSuc: "密码修改成功",
            al_pswUpdateFaild: "密码修改失败",
            al_resetPswSuc: "密码重置成功",
            al_resetPswFaild: "密码重置失败",
            editUser: "编辑用户",
            addUser: "新建用户",
            pl_enUsername: "请输入英文用户名",
            al_userName: "用户名不能为空",
            al_mailNotCorrect: "邮箱格式不正确",
            al_userExisted: "用户名已存在",
            al_addUserSuc: "添加用户成功",
            al_addUserFaild: "添加用户失败",
            al_updateUserSuc: "修改用户成功",
            al_updateUserFaild: "修改用户失败",
            rolePermission: "角色权限",
            createRole: "创建新角色",
            allRole: "全部角色",
            user: "用户",
            clickAssign: "点击分配用户",
            cf_delRole: "确定删除该角色",
            roleName: "角色名",
            termPermission: "终端权限",
            funcPermission: "功能权限",
            select: "选择",
            editRole: "编辑角色",
            assignUser: "分配用户",
            al_assignSuc: "分配成功",
            al_assignFaild: "分配失败",
            pl_keyword: "关键词搜索",
            operationLog: "操作日志",
            logList: "日志列表",
            operationObject: "操作对象",
            operationTime: "操作时间",
            logContent: "日志内容",
            empty: "空",
            addRole: "新建角色",
            pleaseSelect: "请选取",
            failedGetTerminalNodes: "获取终端节点失败",
            al_noRoleName: "角色名不能为空",
            al_RoleNameExist: "角色名已存在",
            addSuc: "创建成功",
            addFaild: "创建失败",
            editSuc: "修改成功",
            editFaild: "修改失败",
        }
    }
})