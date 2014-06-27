Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',

    views: [
        'user.List',
        'user.Edit',
        'user.Confirm'
    ],
	
	stores:[
        'Users',
    ],

    init: function() {
        this.control({
            'userlist': {
                itemdblclick: this.editUser
            },
            'useredit button[action=save]': {
                click: this.updateUser
            },
            'useredit button[action=delete]': {
                click: this.deleteUser
            },
            'confirm button[action=ok]': {
                click: this.confirm
            }
        });
    },

    editUser: function(grid, record) {
        var view = Ext.widget('useredit');
        view.down('form').loadRecord(record);
    },
	updateUser: function(button) {
		var win    = button.up('window'),
			form   = win.down('form'),
			record = form.getRecord(),
			values = form.getValues();

		record.set(values);
		win.close();
    },
	deleteUser: function(button) {
        var view = Ext.widget('confirm');
    },
	confirm: function(button) {
		var win    = button.up('window');
		win.close();
		
		var win2   = Ext.WindowManager.getActive(),
			form   = win2.down('form'),
			record = form.getRecord(),
			values = form.getValues();
		Ext.StoreManager.get("Users").remove(record);
		win2.close();
    }
});