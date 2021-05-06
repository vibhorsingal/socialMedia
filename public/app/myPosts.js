$(() => {
    $.get('/feed', (posts) => {
        for (p of posts) {
            if (p.username === $('#username').text()) {
                $('#postContainer').append($(`
                <div class="col-4" tm-2>
                    <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h3 class="card-title">${p.title}</h4>
                        <p class="card-title">Author: ${p.username}</p>
                        <p class="card-text">${p.body}</p>
                        </div>
                    </div>
                </div>
                `))
            }

        }
    })
})