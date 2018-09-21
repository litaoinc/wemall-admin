import RestBase from 'helpers/RestBase'

class Ctrl extends RestBase{
    constructor($scope, $state, $timeout, $ionicLoading, SpecResource){
        super('spec', $scope, $state, $timeout, $ionicLoading, SpecResource)
        this.init()
    }

    init() {
        this.initForm()
        this.renderHtml()
    }

    renderHtml() {
        this.spec.detailAsync({id: this.$state.params.id})
        .then(data => {
            console.log(data)
            if (data.meta.code == 0) {
                const detail = data.data
                this.form = {
                    id    : detail._id,
                    name  : detail.name,
                    remark: detail.remark,
                }
            }
        })
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
        this.spec.update(this.form, {
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