describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio/'); // зашли на сайт
       cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пароль


       cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
       cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
       cy.get('#loginButton').click(); // найти и нажать кнопку войти


       cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю, что после авторизации вижу текст
       cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
       })

       it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пароль
 
 
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio10202'); // ввели неверный пароль
        cy.get('#loginButton').click(); // найти и нажать кнопку войти
 
 
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
        })

        it('Логин без @ и верный пароль', function () {
            cy.visit('https://login.qa.studio/'); // зашли на сайт
            cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пароль
     
     
            cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
            cy.get('#pass').type('iLoveqastudio'); // ввели верный пароль
            cy.get('#loginButton').click(); // найти и нажать кнопку войти
     
     
            cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю, что после авторизации вижу текст
            cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
            })

            it('Неверный логин и верный пароль', function () {
                cy.visit('https://login.qa.studio/'); // зашли на сайт
                cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пароль
         
         
                cy.get('#mail').type('dariasha1@yandex.ru'); // ввели неверный логин 
                cy.get('#pass').type('iLoveqastudio'); // ввели верный пароль
                cy.get('#loginButton').click(); // найти и нажать кнопку войти
         
         
                cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю, что после авторизации вижу текст
                cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
                cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден для пользователя
                })

                it('Проверка восстановления пароля', function () {
                    cy.visit('https://login.qa.studio/'); // зашли на сайт
                    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки забыли пароль
                    
                    cy.get('#forgotEmailButton').click(); // найти и нажать кнопку Забыли пароль
                    cy.get('#mailForgot').type('german@dolnikov.ru') // ввести верный логин
                    cy.get('#restoreEmailButton').click() // нажать кнопку отправить код
                    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем, что м получаем сообщение об успешной отправке сообщения
                    })

                    it('Проверка на приведение к строчным буквам в логине', function () {
                        cy.visit('https://login.qa.studio/'); // зашли на сайт
                        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяем цвет кнопки забыли пароль
                        
                     
                        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин с заглавными буквами 
                        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
                        cy.get('#loginButton').click(); // найти и нажать кнопку войти
                        cy.get('#messageHeader').contains('Авторизация прошла успешно');
    
                        })
})




// План
// Найти поле логин и ввести правильный логи
// Найти поле пароль и ввести правильный пароль
// Найти кнопку войти и нажать войти
// проверить,что авторизация прошла успешно