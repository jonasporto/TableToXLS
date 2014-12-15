
/**
* @jonasporto
* Simple Convert Table To XLS
* How To Use :
* TableToXLS.export('.class');
* TableToXLS.export('#id');
* TableToXLS.export('table');
* TableToXLS.export() - (default element table)
*/


var TableToXLS = {
    
        table : 'table',

        tr : function(){
            return document.querySelectorAll( this.table + ' tr ');
        },

        getDataInTable : function(){
            
            var i = 0,  data = this.tr();

            this.result = '';

            for (; i < data.length; i++){
                
                var j = 0, header = data[i].querySelectorAll('th'),
                body = data[i].querySelectorAll('td'), data_row = '';

                if (header.length > 0) data_row = header;
                if (body.length > 0) data_row = body;

                for( ; j < data_row.length; j++){
                    this.result += "\"" + data_row[j].textContent.replace(/(\r\n|\n|\r)/gm,"") + "\"";
                    if (data_row.length -1 != j) this.result += ",";
                    else  this.result += "\n";
                }
           }
           return this.result;
       
        },
        
        sendToOpenOrDownload : function(data) {
            var link = document.createElement('a');
        
            link.setAttribute('download', this.filename);
            link.setAttribute('href','data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(data));
            link.setAttribute('target', '_blank');
        
            document.body.appendChild(link);
        
            link.click();
        
            document.body.removeChild(link);
        },

        export : function(table){
            if(table) this.table = table;
            return this.sendToOpenOrDownload(this.getDataInTable());
        },

        filename : 'export.xls',
        
        result : ''
};
