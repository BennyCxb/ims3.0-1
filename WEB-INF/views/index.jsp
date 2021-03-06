<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Clear信息发布平台</title>
  <link rel="shortcut icon" href="resources/favicon.ico">
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <!-- Bootstrap 3.3.6 -->
  <link rel="stylesheet" href="resources/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="resources/bootstrap/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="resources/bootstrap/css/ionicons.min.css">
  <!-- bootstrap slider -->
  <link rel="stylesheet" href="resources/plugins/bootstrap-slider/slider.css">
  <!-- Select2 -->
  <link rel="stylesheet" href="resources/js/bower_components/select2/dist/css/select2.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="resources/dist/css/AdminLTE.css">
  <!-- Bootstrap switch -->
  <link rel="stylesheet" href="resources/plugins/bootstrap-switch/bootstrap-switch.min.css"/>
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="resources/dist/css/skins/_all-skins.min.css">
  <link rel="stylesheet" href="resources/css/common/base.css">
  <link rel="stylesheet" href="resources/css/pages/layout/list_dialog.css">
  <link rel="stylesheet" href="resources/css/pages/channel/timer.css">
  <link rel="stylesheet" href="resources/plugins/iCheck/all.css"/>
  <link rel="stylesheet" href="resources/css/pages/channel/edit.css">
    <link rel="stylesheet" href="resources/css/pages/channel/list.css"/>
    <link rel="stylesheet" href="resources/css/pages/layout/edit.css">
    <link rel="stylesheet" href="resources/css/pages/layout/list.css"/>
    <!-- Bootstrap Color Picker -->
    <!--<link rel="stylesheet" href="resources/plugins/colorpicker/bootstrap-colorpicker.min.css">-->

    <link rel="stylesheet" href="resources/plugins/colorpicker/dist/bootstrap.colorpickersliders.min.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <!-- icheck -->

  <![endif]-->
</head>
<body class="hold-transition skin-blue sidebar-mini" >
<c:url value="/j_spring_security_logout" var="logoutUrl"/>
<!-- Site wrapper -->
<div class="wrapper">

  <header class="main-header">
    <!-- Logo -->
    <a class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>IMS</b></span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>CLEAR IMS</b> 3.0</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <li><a id="dpUpl" title="点击打开上传页面"><i class="glyphicon glyphicon-cloud-upload"></i></a></li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a class="dropdown-toggle" data-toggle="dropdown">
              <!-- <img src="resources/dist/img/user2-160x160.jpg" class="user-image" alt="User Image"> -->
              <span id="username" class="hidden-xs"><sec:authentication property="name"/>@${project_name}</span>
              <i class="glyphicon glyphicon-triangle-bottom" style="font-size: 12px; transform: translateY(2px) scale(0.9); margin-left: 4px;"></i>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header" style="padding-left:0; padding-right:0; height: 132px;">
                <!-- <img src="resources/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image"> -->

                <p>
                  <sec:authentication property="name"/>@${project_name}
                  <small>${project_name_cn}
                  </small>
                </p>
                <a id="repassword" class="index-header-user-option"><i class="fa fa-unlock-alt"></i>修改密码 </a>
                <a id="logout" class="index-header-user-option" style="width: 100%;"><i class="glyphicon glyphicon-log-out"></i>退出</a>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>

  <!-- 资源上传弹层区域 -->
  <section id="page_upload"></section>

  <!-- 全屏弹层区域 -->
  <section id="cover_area"></section>
  <section id="cover_area2"></section>
  <!-- =============================================== -->

  <!-- Left side column. contains the sidebar -->
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <ul class="sidebar-menu">
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>

  <!-- =============================================== -->

  <!-- Content Wrapper. Contains page content -->
  <div id="page_box" class="content-wrapper">
  </div>
  <!-- /.content-wrapper -->

  <footer class="main-footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 3.0.1
    </div>
    <strong><a href="http://www.cleartv.cn">清鹤科技</a></strong> All rights
    reserved.
    <span id="USER-NAME" style="display: none;"><sec:authentication property="name"/></span>
  </footer>

</div>
<!-- ./wrapper -->

<!-- .full-screen -->
<div class="full-screen none" id="edit-page-container"></div>
<!-- /.full-screen -->

<!-- upload按钮-->
<input id="file" name="file" type="file" multiple accept="image/*, audio/*, video/*"/>

<!-- jQuery 2.2.0 -->
<script src="resources/plugins/jQuery/jQuery-2.2.0.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="resources/bootstrap/js/bootstrap.min.js"></script>
<!-- InputMask -->
<script src="resources/plugins/input-mask/jquery.inputmask.js"></script>
<script src="resources/plugins/input-mask/jquery.inputmask.date.extensions.js"></script>
<script src="resources/plugins/input-mask/jquery.inputmask.extensions.js"></script>
<!-- SlimScroll -->
<script src="resources/plugins/slimScroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="resources/plugins/fastclick/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="resources/dist/js/app.min.js"></script>
<!-- Sea.js 3.0.0 -->
<script src="resources/js/common/sea.js"></script>
<script src="resources/plugins/jqPaginator/jqPaginator.min.js"></script>
<!-- RubaXa/Sortable -->
<script src="resources/js/bower_components/Sortable/Sortable.min.js"></script>
<!-- underscore -->
<script src="resources/js/bower_components/underscore/underscore-min.js"></script>
<!-- Backbone -->
<script src="resources/js/bower_components/backbone/backbone-min.js"></script>
<!-- Bootstrap slider -->
<script src="resources/plugins/bootstrap-slider/bootstrap-slider.js"></script>
<!-- Bootstrap switch -->
<script src="resources/plugins/bootstrap-switch/bootstrap-switch.min.js"></script>
<!-- Select 2 -->
<script src="resources/js/bower_components/select2/dist/js/select2.full.js"></script>
<!-- jQuery.Marquee -->
<script src="resources/js/bower_components/jquery.marquee/jquery.marquee.min.js"></script>
<!--  -->
<script src="resources/js/bower_components/jquery-sticky/jquery.sticky.js"></script>
<script src="resources/plugins/iCheck/icheck.min.js"></script>
<!-- bootstrap color picker -->
<!--<script src="resources/plugins/colorpicker/bootstrap-colorpicker.min.js"></script>-->
<script src="resources/plugins/colorpicker/dist/tinycolor.min.js"></script>
<script src="resources/plugins/colorpicker/dist/bootstrap.colorpickersliders.nocielch.min.js"></script>
<script src="resources/plugins/colorpicker/dist/bootstrap.colorpickersliders.min.js"></script>
<!-- date.format -->
<script src="resources/js/common/date.format.js"></script>



<script>
	seajs.config({
	  base: "./resources/js/"
	})
	seajs.use("pages/index" , function(index){ index.init(); })
</script>

</body>
</html>