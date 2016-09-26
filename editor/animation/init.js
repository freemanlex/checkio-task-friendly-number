requirejs(['ext_editor_1', 'ext_editor_io', 'jquery_190', 'raphael_210'],
    function (ext, extIO, $, TableComponent) {
        var io = new extIO({
            functions: {
                js: 'friendlyNumber',
                python: 'friendly_number'
            }
        });
        io.parseInputArguments = function (checkioInput) {
            var lang = top.Ext.INTERPRETER_SLUG.split('-')[0];
            if (lang === 'js') {
                var args = ext.JSON.encode(checkioInput);
                return args.slice(1, args.length - 1);
            } else {
                return '';
            }
        };
        io.start();
    }
);
