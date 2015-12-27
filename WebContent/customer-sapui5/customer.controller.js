sap.ui.controller("customer-sapui5.customer", {
	
	//-----------------------------------------------------------------------------------------------------------------
	/**
	 * Method onInit
	 */
	onInit: function() {
		var oModel = new sap.ui.model.json.JSONModel();
		
		$.ajax({
			url:"http://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json",
			dataType: 'json',
			success: function(resposta){
				var dadosRetorno = resposta.value;
				
				console.log(dadosRetorno);			
				oModel.setData(dadosRetorno);
			}
		})
		
		sap.ui.getCore().setModel(oModel);		
	},
	//-----------------------------------------------------------------------------------------------------------------
	
});