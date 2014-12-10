var TableToCSV = {
    
        tableClass : '.relatorio',

        tr : function(){
            return document.querySelectorAll( this.tableClass + ' tr ');
        },

        getDataInTable : function(){
            
            var i = 0,  data = this.tr();

            for (; i < data.length; i++){
                
                var j = 0, header = data[i].querySelectorAll('th'),
                body = data[i].querySelectorAll('td'), data_row = '';

                if (header.length > 0 && i === 0) data_row = header;
                if (body.length > 0) data_row = body;

                for( ; j < data_row.length; j++){
                    this.result += "\"" + data_row[j].textContent + "\"";
                    if (data_row.length -1 != j) this.result += ",";
                    else  this.result += "\n";
                }
           }
           return this.result;
       
        },
        
        sendToOpenOrDownload : function(data) {
             window.location ='data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(data);
             return true;
        },

        export : function(tableClass){
            if(tableClass) this.tableClass = tableClass;
            return this.sendToOpenOrDownload(this.getDataInTable());
        },
        
        result : ''
};


