$(() => {
    $('.navbar-nav .nav-link').css('cursor', 'pointer');
    if ($('#username').text() === 'Login') {
        $('#username').removeClass('disabled')
    }
    let navlinks = $('.navbar-nav .nav-link')
    navlinks.click((ev) => {
        const url = `./components/${$(ev.target).attr('dataComponent')}.html`
        $('#content').load(url)
    })
    $.get('/user-detail', (user) => {
        console.log(user.username)
        $('#username').text(user.username)
    })
})

