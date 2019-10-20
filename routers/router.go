package routers

import (
	"github.com/astaxie/beego"
	"projectA/controllers"
)

func init() {
	beego.Router("/", &controllers.MainController{})

	beego.Router("/tool", &controllers.ToolController{})

	beego.Router("/blog", &controllers.BlogController{})
}
