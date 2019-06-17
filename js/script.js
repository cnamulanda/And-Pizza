$(document).ready(function() {
    $(".icon-hiddens ").click(function() {
      $(".icon-showings ").show();
      $(".icon-hiddens ").hide();
    });
    $(".icon-showings ").click(function() {
        $(".icon-hiddens ").show();
        $(".icon-showings ").hide();
      });
      $(".icon-hid").click(function() {
        $(".icon-show ").show();
        $(".icon-hid").hide();
      });
      $(".icon-show ").click(function() {
          $(".icon-hid").show();
          $(".icon-show ").hide();
     });
     $(".icon-hidden ").click(function() {
        $(".icon-showing ").show();
        $(".icon-hidden ").hide();
      });
      $(".icon-showing ").click(function() {
          $(".icon-hidden ").show();
          $(".icon-showing ").hide();
        });
     