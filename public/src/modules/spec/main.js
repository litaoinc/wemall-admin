// register
import register from 'helpers/register'

// controllers
import SpecAddCtrl from './controllers/add'
import SpecEditCtrl from './controllers/edit'
import SpecListCtrl from './controllers/list'

// services
import SpecResource from './resource'

export default 
	angular
		.module('app.spec', [])
    	.controller('SpecAddCtrl', SpecAddCtrl)
    	.controller('SpecEditCtrl', SpecEditCtrl)
    	.controller('SpecListCtrl', SpecListCtrl)


    register('app.spec')
    	.factory('SpecResource', SpecResource)