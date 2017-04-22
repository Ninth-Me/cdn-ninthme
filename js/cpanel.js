function getQueryParam(param) {
    var original = param;
    location.search.substr(1).split("&").some(function(item) {
        return item.split("=")[0] == param && (param = item.split("=")[1])
    });
    if (original == param) {
        return null;
    }
    return param;
}

$(function() {
    if (!getQueryParam('option')) {
        $('#item_rails').parent().remove();
        $('#item_ruby').parent().remove();
        $('#support').remove();
        $('#item_password').parent().remove();
        $('#item_updatecontact').parent().remove();

        $('#item_mysql-remoteaccess').parent().remove();
        $('a[href="http://cu.cc"]').parent().remove();
        var accessLogs = $('#icon-rawaccesslogs');
        accessLogs.attr('style', accessLogs.attr('style') + '; height: 32px;');
        $('#stats').each(function() {
            $(this).attr('style', 'margin-bottom: 7px;');
        });
        var ad = '<div style="width: 100%; text-align: center;">Hello World. This is an ads space.</div>';
        var premium = '<div id="domains" class="itembox">' + '<div id="domains-bdrop" class="celldrop">&nbsp;</div>' + '<div class="cellbox">' + '<div class="cellbox-header">' + '<h6 id="pref-header" class="index_box_header">Message from Ninth.Me Team</h6>' + '<div id="pref-expander" class="box-collapse-control">&nbsp;</div>' + '</div>' + '<div id="pref-body" class="cellbox-body">' + '<iframe src="https://ninth.me/message.txt" scrolling="no" onload="resizeIframe(this)" frameborder="0"></iframe>' + '<script>function resizeIframe(obj) {obj.style.height = obj.contentWindow.document.body.scrollHeight + "px";}</script>' + '<div class="clearit">&nbsp;</div>' + '</div>' + '</div><div id="domains-adrop" class="celldrop">&nbsp;</div>' + '</div>';
        if (!getQueryParam('option') || $.inArray(option, ['gettingstarted', 'changeemail', 'changelanguage', 'diskspace', 'ftpsettings', 'ftpclients', 'cron_configure', 'stats2', 'accountsettings']) > -1) {
            var content = $('#content');
            content.prepend(ad);
            content.append(ad);
            $('#boxes').prepend(premium);
        } else if ($.inArray(option, ['subdomains', 'domains', 'parked']) > -1) {} else {
            $('#content').before(ad);
            $('#heading-bottom_bg').before(ad);
        }
        $('a[href^="https://ifastnet.com/portal"]').attr('href', '/panel/indexcp.php?option=upgrade-new');
        $('a[href^="http://tutorials.securesignup.net"]').attr('href', 'https://ninth.me/support');
        $('.footer_li_a:contains("Contact")').text('Ninth.Me').attr('href', 'https://ninth.me');
        $('#logo').find('img').wrap('<a href="https://ninth.me/dashboard" target="_blank" />');

        // If it is the demo account disable links access:
        if ((document.documentElement.textContent || document.documentElement.innerText).indexOf('demoacct.ninth.me') > -1) {

          // Remove subdomains link
          $('a[href^="/panel/indexcp.php?option=subdomains"]').attr('href', '#');

          // Remove Addon domains link
          $('a[href^="/panel/indexcp.php?option=domains"]').attr('href', '#');

          // remove account settings link
          $('a[href^="/panel/indexcp.php?option=accountsettings"]').attr('href', '#');

          // remove website redirect link
          $('a[href^="/panel/indexcp.php?option=redirect"]').attr('href', '#');

          // remove email mx link:
          $('a[href^="/panel/indexcp.php?option=mxrecords"]').attr('href', '#');

          // remove spf records link:
          $('a[href^="/panel/indexcp.php?option=spfrecords"]').attr('href', '#');

          // remove accesslog links
          $('a[href^="/panel/indexcp.php?option=accesslogchoose"]').attr('href', '#');

          // set target of online file manager to none so
          // that it doesnt open new cpanel window then set link to nothing
          $('a[href^="http://185.27.134.9//index.php?ftpserver=185.27.134.11&ftpserverport=21&username=ehmie_19815375"]').attr('target', '');
          $('a[href^="http://185.27.134.9//index.php?ftpserver=185.27.134.11&ftpserverport=21&username=ehmie_19815375"]').attr('href', '#');

          // remove ftp settings link
          $('a[href^="/panel/indexcp.php?option=ftpsettings"]').attr('href', '#');

          // remove cname records link
          $('a[href^="/panel/indexcp.php?option=cnamerecords"]').attr('href', '#');


          // remove select php version link
          $('a[href^="/panel/indexcp.php?option=phpselectversion"]').attr('href', '#');
          // remove Softaculous link
          $('a[href^="/panel/indexcp.php?option=installer"]').attr('href', '#');
          // remove site builder link
          $('a[href^="/panel/indexcp.php?option=sitebuilder"]').attr('href', '#');
          // remove Softaculous link
          $('a[href^="/panel/indexcp.php?option=installer"]').attr('href', '#');


        }

    }
});
