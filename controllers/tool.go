// 工具控制器
package controllers

import "github.com/astaxie/beego"

// ToolController 工具控制器
type ToolController struct {
	beego.Controller
}

// Get 工具首页
func (c *ToolController) Get() {
	c.TplName = "tool/index.html"
}

// Timestamp Unix时间戳转换工具首页
func (c *ToolController) Timestamp() {
	c.TplName = "tool/timestamp.html"
}
