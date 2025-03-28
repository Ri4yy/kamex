document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('.header-mobile'),
    btnMenu = document.querySelector('.btn-menu'),
    html = document.querySelector('html');

    btnMenu.addEventListener('click', (e) => {
        menu.classList.toggle('open')

        btnMenu.classList.toggle('btn-menu--open')
        html.classList.toggle('no-scroll')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 1280) {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        } else {
            return
        }
    }

    window.addEventListener('resize', () => {
        resize()
    })
    resize()

    let menuLink = document.querySelectorAll('.header-mobile__link')

    menuLink.forEach(link => {
        link.addEventListener('click', (e) => {
            menu.classList.remove('open')
            btnMenu.classList.remove('btn-menu--open')
            html.classList.remove('no-scroll')
        })
    })

    let faqElements = document.querySelectorAll('.faq__item')

    faqElements.forEach(element => {
        let toggle = element.querySelector('.faq__item-question')

        toggle.addEventListener('click', () => {
            element.classList.toggle('active')
        })
    })

    // Модальное окно
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function () {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    showModal($('.open-modal'), $('.modal--form'));
})