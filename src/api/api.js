import axios from 'axios';

let backBase = "/businessBack"

let base = '' + backBase;
// let base = backBase;

let instance = axios.create({
    timeout: 30000 // request timeout
});

instance.interceptors.request.use(config => {
	config.headers = $.extend({
        'X-key': localStorage.getItem('X-key'),
    },config.headers);
	return config
}, error => {
	return Promise.reject(error)
});

instance.interceptors.response.use((response) => {

	let code = response.data.code
    let msg = response.data.message

    if (code != 0 && msg == "") {
        response.data.message = "操作失败，请重试"
    }
    if (code == 2 ) {
        location.href = `#/login`;
        location.reload();
    }

    return response;

}, (error) => {
    return Promise.reject(error);
});


// 封装axios的post请求
export function fetch(url, param,type="post",data) {

    return new Promise((resolve, reject) => {
        if( type == "post"){
            instance.post(url, param,{
                headers:data
            })
                .then(response => {
                    resolve(response.data);
                }).catch((error) => {
                if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
                    this.$dialog.toast({mes:"网络连接超时，请稍后重试"})
                }
                reject(error);
            });
        }
        if( type == "get"){
            let params = {
                params :param
            }
            instance.get(url, params,data)
                .then(response => {
                    resolve(response.data);
                })
                .catch((error) => {
                    if(error.code == 'ECONNABORTED' && error.message.indexOf('timeout')!=-1){
                        this.$dialog.toast({mes:"网络连接超时，请稍后重试"})
                    }
                    reject(error);
                });
        }

    })
}
//utils
export const getOrders = param => { return fetch(`${base}/getOrders`,param,'post')};
export const updateOrderStatus = param => { return fetch(`${base}/updateOrderStatus`,param,'post')};
export const getCateList = () => { return fetch(`${base}/getCateList`,{},'get')};
export const updateCategory = param => { return fetch(`${base}/updateCategory`,param,'post')};
export const removeCate = param => { return fetch(`${base}/removeCate/${param}`,{},'get')};
export const getGoodList = param => { return fetch(`${base}/getGoodList`,param,'post')};

export const updateGoods = param => { return fetch(`${base}/updateGoods`,param,'post',{'Content-Type':'multipart/form-data'})};
export const removeGood = param => { return fetch(`${base}/removeGood/${param}`,{},'get')};

export const removeOrder = param => { return fetch(`${base}/removeOrder/${param}`,{},'get')};

export const login = param => { return fetch(`${base}/login`,param,'post')};