import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, SpecResource){
        super('spec', $scope, $state, $timeout, $ionicLoading, SpecResource)
        this.init()
    }

    init() {
        this.spec.list()
    }
}

Ctrl.$inject = [
    '$scope', 
    '$state', 
    '$timeout',
    '$ionicLoading',
    'SpecResource',
] 

export default Ctrl