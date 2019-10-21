package routers

import (
	"github.com/astaxie/beego"
	"projectA/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	beego.Router("/tool", &controllers.ToolController{})
	beego.Router("/tool/timestamp", &controllers.ToolController{}, "get:Timestamp")

	beego.Router("/blog", &controllers.BlogController{})
}
