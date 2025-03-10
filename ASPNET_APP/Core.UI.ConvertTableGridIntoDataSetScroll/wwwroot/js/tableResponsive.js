﻿
$(function () {
    //data-title
    includeJs();
    $('body').find('a').each(function (key, value) {
        if ($(this).html().toLowerCase().includes('create') && $(this).attr('href').toLowerCase() != '') {
            $(this).attr('data-bs-title', 'Add New');
            $(this).addClass('btn btn-primary');
            $(this).html('<i class="fa fa-plus"></i>');
        }
    });
    $('#no-more-tables table').each(function (key, value) {
        const _titles = [];
        $(this).find('tr').each(function (key, value) {
            $(this).find('th').each(function () {
                let title = $(this).html();
                _titles.push(title)
            });
            let _tdLength = $(this).find('td').length;
            $(this).find('td').each(function (key, value) {
                $(this).attr('data-title', _titles[key]);
                if (key === _tdLength - 1) {
                    console.log('Time to Action');
                    $(this).find('a').each(function (key, value) {
                        if ($(this).html().toLowerCase() == 'edit') {
                            $(this).attr('data-bs-title', 'Modify');
                            $(this).addClass('btn btn-warning');
                            $(this).html('<i class="fa fa-pencil"></i>');
                        }
                        else if ($(this).html().toLowerCase() == 'details') {
                            $(this).attr('data-bs-title', 'View Details');
                            $(this).addClass('btn btn-success');
                            $(this).html('<i class="fa fa-eye open"></i>');
                        }
                        else if ($(this).html().toLowerCase() == 'delete') {
                            $(this).attr('data-bs-title', 'Delete This');
                            $(this).addClass('btn btn-danger');
                            $(this).html('<i class="fa fa-trash"></i>');
                        }
                    });

                }
            });
        });
    });
});
function includeJs() {
    //----Here we are adding a responsive table css into Head
    var responsiveCss = document.createElement("style");
    responsiveCss.innerHTML = '@media only screen and (max-width:800px){#no-more-tables table,#no-more-tables tbody,#no-more-tables td,#no-more-tables th,#no-more-tables thead,#no-more-tables tr{display:block}#no-more-tables thead tr{position:absolute;top:-9999px;left:-9999px}#no-more-tables tr{border:1px solid #ccc}#no-more-tables tbody tr th{display:none!important}#no-more-tables td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:40%;white-space:normal;text-align:left}#no-more-tables td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;text-align:left;font-weight:700;content:attr(data-title)}}';
    document.head.appendChild(responsiveCss);

    //----Here we are adding a font-awesome js cdn Body with script tag
    var fa_js = document.createElement("script");
    fa_js.type = "text/javascript";
    fa_js.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js';
    document.body.appendChild(fa_js);

    //----Here we are adding a font-awesome css cdn Body after font-awesome js script with link tag
    var fa_cs = document.createElement("link");
    fa_cs.rel = "stylesheet";
    fa_cs.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css";
    document.body.appendChild(fa_cs);
}

