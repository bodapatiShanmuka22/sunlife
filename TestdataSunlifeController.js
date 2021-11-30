/*This is a second component*/


({    
      
    onInit : function( component, event, helper ) {    
          
        component.set( 'v.mycolumns', [    
            {label: 'Account Name', fieldName: 'Name', type: 'text', editable:'true'},    
            {label: 'Owner', fieldName: 'OwnerId', type: 'text'},   
            {label: 'Phone', fieldName: 'Phone', type: 'text',editable:'true'},   
            {label: 'Website', fieldName: 'Website', type: 'text',editable:'true'},     
            {label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'Number',editable:'true'}    
        ]);    
        helper.fetchAccounts(component);  
          
    },  
      
    onSave : function( component, event, helper ) {   
          
        var updatedRecords = component.find( "acctTable" ).get( "v.draftValues" );  
        var action = component.get( "c.updateAccts" );  
        action.setParams({  
              
            'updatedAccountList' : updatedRecords  
              
        });  
        action.setCallback( this, function( response ) {  
              
            var state = response.getState();   
            if ( state === "SUCCESS" ) {  
  
                if ( response.getReturnValue() === true ) {  
                      
                    helper.toastMsg( 'success', 'Records Saved Successfully.' );  
                    helper.refresh(component);
                    component.find( "acctTable" ).set( "v.draftValues", null );  
                      
                } else {   
                      
                    helper.toastMsg( 'error', 'Something went wrong. Contact your system administrator.' );  
                      
                }  
                  
            } else {  
                  
                helper.toastMsg( 'error', 'Something went wrong. Contact your system administrator.' );  
                  
            }  
              
        });  
        $A.enqueueAction( action );  
      
          
    }  
      
})
