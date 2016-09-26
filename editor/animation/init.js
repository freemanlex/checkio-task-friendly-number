requirejs(['ext_editor_io', 'jquery_190', 'raphael_210'],
    function (extIO, $, TableComponent) {
        var io = new extIO({
            functions: {
                js: 'friendlyNumber',
                python: 'friendly_number'
            }
        });
        io.parseInputArguments = function (checkioInput) {
            var lang = top.Ext.INTERPRETER_SLUG.split('-')[0];
            if (lang === 'js') {
                return ext.JSON.encode(checkioInput).slice(1, args.length - 1);
            } else {
                return '';
            }
        };
        io.start();
    }
);
