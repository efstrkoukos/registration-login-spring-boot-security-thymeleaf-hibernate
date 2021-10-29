/**
 * 
 */
        Ext.define('MyApp.view.MainView3', {
		extend: 'Ext.container.Viewport',
            requires: [
    	'Ext.panel.Panel',
        'Ext.button.Button'
		],
            //cls: 'sencha-dash-viewport',
            itemId: 'mainView3',

            layout: {
                type: 'vbox',
                align: 'stretch'
            },
			

            items: [{
                xtype: 'toolbar',
                //cls: 'sencha-dash-dash-headerbar shadow',
                height: 64,
                itemId: 'headerBar',
                items: [{
                        xtype: 'component',
                        reference: 'senchaLogo',
                        //cls: 'sencha-logo',
                        html: '<div class="main-logo"><img src="http://examples.sencha.com/extjs/6.2.0/examples/admin-dashboard/resources/images/company-logo.png"><strong>jrws</strong> v0.1beta</div>',
                        width: 250
                    }, {
                        margin: '0 0 0 8',
                        ui: 'header',
                        iconCls: 'x-fa fa-navicon',
                        id: 'main-navigation-btn',
                        //                        handler: 'onToggleNavigationSize',
                        tooltip: 'Esconder painel de navegação'
                    }
                    
                    , {
                        iconCls: 'x-fa fa-envelope',
                        ui: 'header',
                        href: '#email',
                        hrefTarget: '_self',
                        tooltip: 'Veja as suas mensagens'
                    }, {
                        iconCls: 'x-fa fa-question',
                        ui: 'header',
                        href: '#faq',
                        hrefTarget: '_self',
                        tooltip: 'Ajuda / FAQ\'s'
                    }, {
                        iconCls: 'x-fa fa-th-large',
                        ui: 'header',
                        href: '#profile',
                        hrefTarget: '_self',
                        tooltip: 'O seu perfil'
                    }, {
                        xtype: 'tbtext',
                        text: '<strong>Luis Semedo Duarte</strong>',
                        cls: 'top-user-name'
                    }, {
                        xtype: 'image',
                        //cls: 'header-right-profile-image',
                        height: 35,
                        width: 35,
                        //alt: 'imagem_de_utilizador',
                        //src: 'https://media.licdn.com/mpr/mpr/shrink_100_100/AAEAAQAAAAAAAAOUAAAAJDgxYjk4NmM5LTliZDMtNGIxZC1hMGU2LTY5YmEzNmE5YmViYw.jpg'
                    }
                ]
            }, /*{
                xtype: 'maincontainerwrap',
                id: 'main-view-detail-wrap',
                reference: 'mainContainerWrap',
                flex: 1,
                items: [{
                        xtype: 'treelist',
                        reference: 'navigationTreeList',
                        itemId: 'navigationTreeList',
                        //ui: 'navigation',
                        store: 'NavigationTree',
                        width: 250,
                        expanderFirst: false,
                        expanderOnly: false
                            
                    }
                    
                ]
            }*/]
        });