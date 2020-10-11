import Vue from "vue"
import dayjs from "dayjs"

// 过滤器
Vue.filter("date", (value, format = "YYYY-MM-DD") =>
	dayjs(value).format(format)
)
