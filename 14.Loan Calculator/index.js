function getinterest() {
    const loanAmountEl = document.querySelector("#loan-amount").value;
    const interestRateEl = document.querySelector("#interest-rate").value;
    const monthEl = document.querySelector("#month").value;
    const installmentEl = document.querySelector("#installment");

let interestEl = [(loanAmountEl * (interestRateEl * 0.01))] / monthEl;

let monthyPayment = (loanAmountEl / monthEl) + interestEl;

installmentEl.innerText = monthyPayment;

}