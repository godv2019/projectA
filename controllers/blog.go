// 博客控制器
package controllers

import "github.com/astaxie/beego"

// BlogController 博客控制器
type BlogController struct {
	beego.Controller
}

// Get 博客首页
func (c *BlogController) Get() {
	c.TplName = "blog/index.html"
}
