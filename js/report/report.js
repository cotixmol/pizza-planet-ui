
fetch('http://127.0.0.1:5000/report/')
    .then(response => response.json())
    .then(data =>{
        console.log(data["top_three_customer"])
        document.querySelector("#month_with_more_revenue").innerHTML = (
            createMonthWithMoreRevenueTemplate(data["month_with_more_revenue"]));
        document.querySelector("#most_repeated_ingredient").innerHTML = (
            createMostRepeatedIngredientTemplate(data["most_repeated_ingredient"]));
        document.querySelector("#top_three_customer").innerHTML = (
            createTopThreeCustomerTemplate(data["top_three_customer"]));
    })


    function createMonthWithMoreRevenueTemplate(element) {
        let month_with_more_revenue = $("#month_with_more_revenue")[0].innerHTML;
        return Mustache.render(month_with_more_revenue, { month_with_more_revenue: element });
    }
    
    function createMostRepeatedIngredientTemplate(element) {
        let most_repeated_ingredient = $("#most_repeated_ingredient")[0].innerHTML;
        return Mustache.render(most_repeated_ingredient, { most_repeated_ingredient: element });
    }
    
    function createTopThreeCustomerTemplate(element) {
        let top_three_customer = $("#top_three_customer")[0].innerHTML;
        for (let i=0; i<element.length; i++){
            element[i][1] = " Total spent: $" + element[i][1];
        }
        return Mustache.render(top_three_customer, { top_three_customers: element });
    }