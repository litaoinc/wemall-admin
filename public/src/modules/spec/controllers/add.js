import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, SpecResource){
        super('spec', $scope, $state, $timeout, $ionicLoading, SpecResource)
        this.init()
        this.specparams = [
            {name : '颜色'},
            {name : '尺寸'},
            {name : '厂商'},
            {name : '套餐'},
            {name : '产地'},
            {name : '外观'},
        ]
    }

    init() {
        this.initForm()
    }

    initForm() {
        this.form = {
            name  : null,
            remark: null,
        }
    }

    submitForm(isValid) {
        if (!isValid) return
        console.log(this.form)
        this.spec.save(this.form, {
            callback: () => this.$state.go('web.spec.list')
        })
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