Ext.define('AM.view.user.Confirm', {
    extend: 'Ext.window.Window',
    alias: 'widget.confirm',

    title: 'Confirm',
	width: 200,
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
				xtype: 'displayfield',
                value: 'Are you sure to delete?',
            }
        ];

        this.buttons = [
            {
                text: 'Ok',
                action: 'ok'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});