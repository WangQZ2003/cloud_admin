import { log } from "console"
import Mock from "mockjs"

const data = Mock.mock({
    "list|3":[
        {
            "id|+1":1,
            name:"@sting",
            price:"@float",
            status:"@boolean",
            "toten|10-20":"@character('lower')",
            date:"@date('yyyy-MM-dd')",
            time:"@time",
            time1:"@time('HH:mm:ss')",
            dateTime:"@datetime",
            dateTime1:"@datetime('yyyy-MM-dd HH:mm:ss')",
            current:"@now",
            // url:"@image('300x250','#fff','#ccc','png','hello')",
            text:"@paragraph(2)",
            ctext:"@cparagraph(2)",
            username:"@cname",
            email:"@email('163.com')",
            url1:"@url('https','baidu.com')",
            dimain:"@domain",
            ip:"@ip",
            area:"@region",
            address:"@county(true)",
            province:"@province",
            zipcode:"@zip",
            "icCard|18":"@id()"
        }
    ]
})

console.log(JSON.stringify(data,null,2));