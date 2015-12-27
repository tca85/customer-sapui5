sap.ui.jsview("customer-sapui5.customer", {
 
	getControllerName : function(){
		return "customer-sapui5.customer";
	},
	
	//-----------------------------------------------------------------------------------------------------------------
	/**
	 * Method createContent
	 */
	createContent : function(oController) {		
		var oTable = new sap.ui.table.Table({
			tableId: "mytable",
			visibleRowCount: 10,
			editable: false
		});
		
		// nome do campo que vem no JSON
		var oControl = new sap.ui.commons.TextView({text:"{ContactName}"})
		
		// descrição do nome da coluna
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Contact Name"}),
			visible: true,
			template: oControl
		}));
		
		var oControl = new sap.ui.commons.TextView({text:"{ContactTitle}"})
		
		// descrição do nome da coluna
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({text:"Contact Title"}),
			visible: true,
			template: oControl
		}));
		
		// a requisição ajax foi feita no método onInit do controller
		// não é necessário usar /value porque usamos isso no controller
		// var oData = response.value;
		oTable.bindRows("/");
		
		return oTable;
	},
	
	//-----------------------------------------------------------------------------------------------------------------
	
});
