

 describe('Покупка аватара', function () {
    it('2е2', function () {
        cy.visit('https://pokemonbattle.me/'); // зашли на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // ввели верный логин
        cy.get('#password').type('USER_PASSWORD'); // ввели верный пароль
        cy.get('.auth__button').click(); // нажали кнопку войти
        cy.get('.header__btns > [href="/shop"]').click();// нажали кнопку магазин
        cy.get('.available > button').first().click();  //кликаем по кнопке Купить у второго доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');  //вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('125'); // вводим cvc
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type ('DARYA USOVA'); // вводим Имя
        cy.get('.pay-btn').click(); //нажимаем на кнопку Оплатить
        cy.get('#cardnumber').type('56456'); // вводим пуш из сообщения
        cy.get('.payment__submit-button').click()// нажимаем на кнопку Отправить
        cy.get('.payment__field-defolt-for-success').contains('Покупка прошла успешно'); // проверяем успешную покупку
        cy.get('.payment__field-defolt-for-success').should('be.visible');


    });
});

   
