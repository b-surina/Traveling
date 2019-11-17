Page({
    // 初始化数据
    data: {
        banner:[],
        four:[],
        five:[],
        one:[]
    },
    // 生命周期函数--监听页面加载
    onLoad: function (options) {
        wx.request({
            url: 'https://bsrn.gitee.io/aa/data.json',
            data: {},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (result) => {
                // 轮播图
                this.data.baneer = result.data.data.banner
                this.setData({
                    banner:this.data.baneer
                })
                // 选项图
                this.data.four = result.data.data.box
                this.setData({
                    four:this.data.four
                })
                // 字体图标
                this.data.five = result.data.data.icon
                this.setData({
                    five:this.data.five
                })
                // 打卡攻略
                this.data.one = result.data.data.one
                this.setData({
                    one:this.data.one
                })
            },
        });
    }    
})
