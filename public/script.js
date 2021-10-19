
let a = 'a'
let b = 'b'
let jQuery = 'jQuery'
{

    jQuery(function (a) {
        a('#ipayButton').click(function () {
            a('#ipayModal').show();
        }),
            a('.ipayClose').click(function () {
                a('#ipayModal').hide();
            }),
            a('window').click(function (b) {
                b.target == a('#ipayModal')[0] && a('#ipayModal').hide();
            }),
            (a.fn.form = function () {
                var b = [];
                return (
                    a(a(this).serializeArray()).each(function (a, c) {
                        b[c.name] = c.value;
                    }),
                    b
                );
            }),
            a('#ipayForm').validate({
                rules: {
                    Amount: {
                        required: !0,
                        number: !0,
                    },
                },
            }),
            a('#ipayForm').submit(function (b) {
                var c = new Date(),
                    d = c.getTime(),
                    e = d + a('#ipayFullName').val();
                (e = e.replace(/[^a-zA-Z0-9]/g, '')),
                    a('#ipayAmount').val(parseFloat(a('#ipayAmount').val()).toFixed(2)),
                    a('#ipayTransactionRef').val(e.substr(0, 50)),
                    a('#ipayBankRef').val(e.substr(0, 20));
                var f = a(this).form(),
                    g =
                        f.SiteCode +
                        f.CountryCode +
                        f.CurrencyCode +
                        f.Amount +
                        f.TransactionReference +
                        f.BankReference +
                        f.Optional1 +
                        f.Optional2 +
                        f.Optional5 +
                        f.Customer +
                        f.CancelUrl +
                        f.ErrorUrl +
                        f.SuccessUrl +
                        f.IsTest +
                        'c0N8gSerCZBXsJAhVD5Ikk1wMI5gQS7Y',
                    h = sha512(g.toLowerCase());
                a('#ipayHash').val(h);
            });
    });
}

