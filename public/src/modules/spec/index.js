import { plugin, loadPlugin } from 'etc/loadplugin'
import authService from '../app/resolves/authService'

function Router($stateProvider, $ocLazyLoadProvider) {
    
    //set router
    $stateProvider

        .state('web.spec', {
            abstract: true,
            url: '/spec',
            views: {
                'menu-content': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!../web/tpl/tabs.html'))
                            }, 'tabs.html')
                        })
                    }]
                }
            },
            resolve: {
                authService: authService,
                loadModule: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        require.ensure([], () => {
                            $ocLazyLoad.load({name: require('./main').default.name})
                            resolve()
                        }, 'spec')
                    })
                }]
            }
        })

        .state('web.spec.list', {
            url: '/list',
            views: {
                'tab-admin': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/list.html'))
                            }, 'web.list.html')
                        })
                    }],
                    controller: 'SpecListCtrl as vm'
                }
            }
        })

        .state('web.spec.add', {
            tabsHidden: true,
            url: '/add',
            views: {
                'tab-admin': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/add.html'))
                            }, 'web.add.html')
                        })
                    }],
                    controller: 'SpecAddCtrl as vm'
                }
            }
        })

        .state('web.spec.edit', {
            tabsHidden: true,
            url: '/{id}/edit',
            views: {
                'tab-admin': {
                    templateProvider: ['$q', ($q) => {
                        return $q((resolve) => {
                            require.ensure([], () => {
                                resolve(require('html!./tpl/add.html'))
                            }, 'web.add.html')
                        })
                    }],
                    controller: 'SpecEditCtrl as vm'
                }
            }
        })
}

Router.$inject = [
    '$stateProvider', 
    '$ocLazyLoadProvider'
]

export default angular
	.module('app.spec.router', [])
    .config(Router)