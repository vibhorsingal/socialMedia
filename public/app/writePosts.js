$(()=>{
        $('#submitPost').click(()=>{
            var title=$('#InputTitle').val()
            var body=$('#InputBody').val()
            $.post('/feed',{
                title:title,
                body:body
            },(post)=>{
            })
        })
    
    
})