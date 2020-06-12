function checkName() {
    var formularz_obj = document.getElementById("nazwa_towaru");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("nazwa_towaru_error");

    if (t_name === "") {
        blad.innerHTML = "Podaj nazwę towaru!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (t_name.length > 10) {
        blad.innerHTML = "Nazwa zbyt długa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function checkCode() {
    var formularz_obj = document.getElementById("kod_towaru");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("kod_towaru_error");
    var regex = /[A-Za-z0-9]{2}[-][A-Za-z0-9]{3}$/g;

    if (t_name === "") {
        blad.innerHTML = "Podaj kod towaru!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else if (!regex.test(t_name)) {
        blad.innerHTML = "Format XX-XXX cyfry i litery (bez znaków specjalnych)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function checkNetto() {
    var formularz_obj = document.getElementById("cena_netto");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("cena_netto_error");
    var zmienna = Number(formularz_obj.value);

    if (t_name === "") {
        blad.innerHTML = "Podaj cene netto!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        var temp = document.getElementById("cena_netto").value;
        temp = Number(temp);
        temp = temp.toFixed(2);
        checkBrutto();
        document.getElementById("cena_netto").value = temp;
    }
    return blad_danych;
}

function checkVat() {
    var formularz_obj = document.getElementById("stawka_Vat");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("stawka_Vat_error");

    if (t_name === "") {
        blad.innerHTML = "Podaj stawke Vat!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
        checkBrutto();
    }
    return blad_danych;
}

function checkBrutto() {
    var formularz_obj_netto = document.getElementById("cena_netto");
    var formularz_obj_brutto = document.getElementById("cena_brutto");
    var formularz_obj_vat = document.getElementById("stawka_Vat");
    netto = Number(formularz_obj_netto.value);
    brutto = formularz_obj_brutto.value;
    vat = Number(formularz_obj_vat.value);
    var podatek = Number((netto * vat / 100));
    var wynik = Number(netto + podatek).toFixed(2);
    document.getElementById("cena_brutto").placeholder = wynik;
    return wynik;
}

function checkCategory() {
    var formularz_obj = document.getElementById("kategoria_towarowa");
    var blad = document.getElementById("kategoria_towarowa_error");

    if (formularz_obj.options[formularz_obj.selectedIndex].value == "Kategoria towarowa") {
        blad.innerHTML = "Wymagana jedna kategoria!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function checkOptions() {
    var formularz_obj = document.getElementById("opcja_towaru");
    var blad = document.getElementById("opcje_towaru_error");

    if (document.querySelectorAll('input[type="checkbox"]:checked').length >= 2) {
        $(':checkbox[name=opcje_towaru]').not(':checked').attr('disabled', true);
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    } else {
        $(':checkbox[name=opcje_towaru]:disabled').attr('disabled', false);
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }

    if (document.querySelectorAll('input[type="checkbox"]:checked').length == 0 || document.querySelectorAll('input[type="checkbox"]:checked').length == 1) {
        blad.innerHTML = "Wymagane dwie opcje!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    }

    return blad_danych;
}

function checkPhoto() {
    var formularz_obj = document.getElementById("zdjecie_towaru");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("zdjecie_towaru_error");

    if (t_name === "") {
        blad.innerHTML = "Podaj nazwę zdjecia!";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    return blad_danych;
}

function checkRating() {
    var ocena = document.getElementsByName('ocena_towaru');
    var wybrane;
    var blad = document.getElementById("ocena_towaru_error");
    for (i = 0; i < ocena.length; i++) {
        if (ocena[i].checked) {
            wybrane = 1;
        }
    }

    if (wybrane == 1) {
        blad.innerHTML = "Zaznacz ocene!";
        blad.classList.add("invalid-feedback");
        ocena.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        ocena.classList.remove("is-valid");
        blad_danych = true;
    } else {
        blad.classList.remove("invalid-feedback");
        ocena.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        ocena.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych = false;
    }
    alert('xd');
    return blad_danych;
}

function checkIfExist() {
    var nazwaSeek = document.getElementById("nazwa_towaru").value;
    var blad = 0;
    $("tbody tr td.nameIntable").each(
        function () {
            if ($(this).text() != nazwaSeek) {
                blad = 0;
            } else if ($(this).text() == nazwaSeek) {
                blad = 1;
            }
        }
    );
    return blad;
}

function ratingPrint() {
    var ocena = document.getElementsByName('ocena_towaru');
    var wybrane;
    for (i = 0; i < ocena.length; i++) {
        if (ocena[i].checked) {
            wybrane = ocena[i].value;
        }
    }
    return wybrane;
}

function categoryPrint() {
    var checkedValue = "";
    var inputElements = document.getElementsByName('opcje_towaru');
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue = checkedValue + inputElements[i].value + " ";
        }
    }
    return checkedValue;
}

function checkAll() {
    var check1 = checkName();
    var check2 = checkCode();
    var check3 = checkNetto();
    var check4 = checkVat();
    var check5 = checkCategory();
    var check6 = checkOptions();
    var check7 = checkPhoto();
    var check8 = checkIfExist();
    if (check1 + check2 + check3 + check4 + check5 + check6 + check7 + check8 == 0) {
        $("#myTable").tablesorter({
            theme: 'blue',
            sortInitialOrder: "desc"
        });

        var nazwa = document.getElementById("nazwa_towaru").value;
        var kod = document.getElementById("kod_towaru").value;
        var netto = document.getElementById("cena_netto").value;
        var vat = document.getElementById("stawka_Vat").value;
        var brutto = checkBrutto();
        var kat = document.getElementById("kategoria_towarowa").value;
        var opcja = categoryPrint();
        var ocena = ratingPrint();
        var zdjecie = document.getElementById("zdjecie_towaru").value;

        var row = '<tr><td class="nameIntable">' + nazwa + '</td><td>' + kod + '</td><td>' + netto + '</td><td>' + vat + '</td><td>' + brutto + '</td><td>' + kat + '</td><td>' + opcja + '</td><td>' + ocena + '</td><td>' + zdjecie + '</td><td><button type="button" class="remove">Usun</button><button type="button" class="edit">Edycja</button><button type="button" class="add" onClick="addToCart()">Dodaj do koszyka</button></td></tr> ';

        // Adding a row
        $row = $(row);
        resort = true;
        $('#myTable')
            .find('tbody').append($row)
            .trigger('addRow', [$row, resort]);

        // Delete a row
        $('#myTable').delegate('button.remove', 'click', function () {
            var t = $('#myTable');
            $(this).closest('tr').remove();
            t.trigger('update');
            return false;
        });

        // Editing a row
        $('#myTable').delegate('button.edit', 'click', function () {
            var przycisk_edycja = document.getElementById('btn_edycja');
            przycisk_edycja.style.display = 'inline-block';
            var przycisk_dodaj = document.getElementById("btn_dodaj");
            przycisk_dodaj.disabled = true;
            var arr = [];
            var $row = $(this).closest("tr"),
                $tds = $row.find("td");

            $.each($tds, function () {
                arr.push($(this).text());
            });
            document.getElementById("nazwa_towaru").value = arr[0];
            document.getElementById("kod_towaru").value = arr[1];
            document.getElementById("cena_netto").value = arr[2];
            document.getElementById("stawka_Vat").value = arr[3];
            document.getElementById("cena_brutto").value = arr[4];
            document.getElementById("zdjecie_towaru").value = arr[8];
            // kategoria
            var kat_edit = arr[5];
            let element = document.getElementById("kategoria_towarowa");
            element.value = kat_edit;
            // opcje
            var opcje_edit = arr[6];
            var opcje_wybrane = opcje_edit.split(" ");
            var opcjexdd = document.getElementsByName('opcje_towaru');
            for (i = 0; i < opcjexdd.length; i++) {
                for (j = 0; j < opcje_wybrane.length; j++) {
                    if (opcjexdd[i].value == opcje_wybrane[j]) {
                        opcjexdd[i].checked = true;
                    }
                }
            }
            // ocena
            var ocena = document.getElementsByName('ocena_towaru');
            var wybrane = arr[7];
            for (i = 0; i < ocena.length; i++) {
                if (ocena[i].value == wybrane) {
                    ocena[i].checked = true;
                }
            }

            var t = $('#myTable');
            $(this).closest('tr').remove();
            t.trigger('update');
        });
    } else {
        if (check8 == 1) {
            alert("Rekord juz istnieje!");
            return;
        }
        alert("Zle wypelniony formularz");
    }
}

function addToCart() {
    // Adding to cart
    $('#myTable').delegate('button.add', 'click', function () {
        var arr = [];
        var $row = $(this).closest("tr"),
            $tds = $row.find("td");

        $.each($tds, function () {
            arr.push($(this).text());
        });

        var produkt = {
            'nazwa': arr[0],
            'cena': arr[4],
            'zdjecie': arr[8],
            'ilosc': 1
        }

        let produkty = JSON.parse(localStorage.getItem("koszyk"));
        var flag = false;
        if (produkty == null) {
            produkty = [
                produkt,
            ];
        } else {
            produkty.forEach(function (temp) {
                if (temp.nazwa == arr[0]) {
                    flag = true;
                }
            })
            if (!flag) {
                produkty.push(produkt);
            }
        }
        localStorage.setItem("koszyk", JSON.stringify(produkty));
    });
    alert("Dodano produkt do koszyka");
}

function editAdd() {
    var check1 = checkName();
    var check2 = checkCode();
    var check3 = checkNetto();
    var check4 = checkVat();
    var check5 = checkCategory();
    var check6 = checkOptions();
    var check7 = checkPhoto();
    var check8 = checkIfExist();
    if (check1 + check2 + check3 + check4 + check5 + check6 + check7 + check8 == 0) {
        $("#myTable").tablesorter({
            theme: 'blue',
            sortInitialOrder: "desc"
        });

        var nazwa = document.getElementById("nazwa_towaru").value;
        var kod = document.getElementById("kod_towaru").value;
        var netto = document.getElementById("cena_netto").value;
        var vat = document.getElementById("stawka_Vat").value;
        var brutto = checkBrutto();
        var kat = document.getElementById("kategoria_towarowa").value;
        var opcja = categoryPrint();
        var ocena = ratingPrint();
        var zdjecie = document.getElementById("zdjecie_towaru").value;

        var row = '<tr><td class="nameIntable">' + nazwa + '</td><td>' + kod + '</td><td>' + netto + '</td><td>' + vat + '</td><td>' + brutto + '</td><td>' + kat + '</td><td>' + opcja + '</td><td>' + ocena + '</td><td>' + zdjecie + '</td><td><button type="button" class="remove">Usun</button><button type="button" class="edit">Edycja</button><button type="button" class="add">Dodaj do koszyka</button></td></tr> ';

        // Adding a row
        $row = $(row);
        resort = true;
        $('#myTable')
            .find('tbody').append($row)
            .trigger('addRow', [$row, resort]);

        var przycisk_edycja = document.getElementById('btn_edycja');
        przycisk_edycja.style.display = 'none';
        var przycisk_dodaj = document.getElementById("btn_dodaj");
        przycisk_dodaj.disabled = false;
    } else {
        if (check8 == 1) {
            alert("Rekord juz istnieje!");
            return;
        }
        alert("Zle wypelniony formularz");
    }
}

function test() {
    let cartProducts = JSON.parse(localStorage.getItem("koszyk"));
    let modal = document.querySelector(".modal-table");
    var suma = 0;
    var i = 0;

    if (cartProducts) {
        modal.innerHTML = "";
        modal.innerHTML += '<tr><td><div class="col-sm-3 nazw">Nazwa</div></td><td><div class="col-sm-3 cen">Cena</div></td><td><div class="col-sm-3 ilo">Ilosc</div></td><td><div class="col-sm-3 sum">Suma</div></td></tr>';
        if (cartProducts && modal) {
            cartProducts.forEach(function (Produkt) {
                modal.innerHTML += '<tr><td><div class="col-sm-3" >' + Produkt.nazwa + '</div></td><td><div class="col-sm-3 cena_' + i + '" value="' + Produkt.cena + '">' + Produkt.cena + '</div></td><td><div class="col-sm-3 ilosc"><input type="text" id="ilosc_' + i + '" onchange="zmiana(this.value,' + i + ', \'' + Produkt.nazwa + '\', \'' + Produkt.cena + '\'); suma_wszystkiego();" value="' + Produkt.ilosc + '"></input></div></td><td><div class="col-sm-3" id="suma_' + i + '">' + Number(Produkt.cena * Produkt.ilosc) + 'zł</div></td></tr>';
                i = i + 1;
                suma = suma + Number(Produkt.cena * Produkt.ilosc);
            })
            modal.innerHTML += '<tr><td><div class="col-sm-3">  <select id="przesyłka" onChange="suma_wszystkiego()"><option value="0" selected disabled>Brak</option><option value="12">DPS 12zł</option><option value="10">DPD 10zł</option><option value="11">DHL 11zł</option></select></div></td><td></td><td>Cena całkowita:</td><td><div id="cena_calkowita">' + suma + 'zł</div></td></tr>';
            modal.innerHTML += '<div id="change"></div>'
        }
    } else {
        modal.innerHTML = "Pusty koszyk!";
    }
}

function zmiana(val, i, szukana, cena) {
    document.getElementById("ilosc_" + i).innerHTML = val;
    let produkty = JSON.parse(localStorage.getItem("koszyk"));
    produkty.forEach(function (temp) {
        if (temp.nazwa == szukana) {
            temp.ilosc = Number(val);
        }
        localStorage.setItem("koszyk", JSON.stringify(produkty));
        new_suma(i, val, cena);
    })
}

function suma(suma) {
    var temp = document.getElementById("przesyłka");
    var choice = Number(temp.options[temp.selectedIndex].value);
    suma = Number(suma + choice);
    document.getElementById("cena_calkowita").innerHTML = suma.toFixed(2) + "zł";
}

function new_suma(i, ilosc, cena) {
    var sumosc = Number(ilosc * cena);
    document.getElementById("suma_" + i).innerHTML = sumosc.toFixed(2) + "zł";
}

function suma_wszystkiego() {
    let produkty = JSON.parse(localStorage.getItem("koszyk"));
    var suma = 0;
    produkty.forEach(function (temp) {
        suma = suma + temp.ilosc * temp.cena;
    })
    var temp = document.getElementById("przesyłka");
    var choice = Number(temp.options[temp.selectedIndex].value);
    suma = Number(suma + choice);
    document.getElementById("cena_calkowita").innerHTML = suma.toFixed(2) + "zł";
}

function zakup() {
    let modal = document.querySelector(".modal-table");
    if (Object.keys(localStorage).length === 0) {
        alert("Nie mozesz kupic pustego koszyka!");
    } else {
        var temp = document.getElementById("przesyłka");
        var choice = Number(temp.options[temp.selectedIndex].value);
        if (choice == 0) {
            alert("Wybierz sposob dostawy!");
        } else {
            modal.innerHTML = "Pusty koszyk!";
            localStorage.removeItem("koszyk");
            alert("Pomyslny zakup!");
        }
    }
}

function jsonAdd() {
    loadJSON(function (response) {
        var baza = JSON.parse(response);

        $("#myTable").tablesorter();
        for (key of Object.keys(baza)) {
            var row = '<tr><td class="nameIntable">' + baza[key].nazwa + '</td><td>' + baza[key].kod + '</td><td>' + baza[key].cena_netto + '</td><td>' + baza[key].vat + '</td><td>' + baza[key].cena_brutto + '</td><td>' + baza[key].kategoria + '</td><td>' + baza[key].opcjaTowaru[0] + " " + baza[key].opcjaTowaru[1] + '</td><td>' + baza[key].ocena + '</td><td>' + baza[key].zdjecie + '</td><td><button type="button" class="remove">Usun</button><button type="button" class="edit">Edycja</button><button type="button" class="add" onClick="addToCart()">Dodaj do koszyka</button></td></tr>';

            $row = $(row),
                resort = true;
            $('#myTable')
                .find('tbody').append($row)
                .trigger('addRows', [$row, resort]);
        }
        // Delete a row
        $('#myTable').delegate('button.remove', 'click', function () {
            var t = $('#myTable');
            $(this).closest('tr').remove();
            t.trigger('update');
            return false;
        });

        // Editing a row
        $('#myTable').delegate('button.edit', 'click', function () {
            var przycisk_edycja = document.getElementById('btn_edycja');
            przycisk_edycja.style.display = 'inline-block';
            var przycisk_dodaj = document.getElementById("btn_dodaj");
            przycisk_dodaj.disabled = true;
            var arr = [];
            var $row = $(this).closest("tr"),
                $tds = $row.find("td");

            $.each($tds, function () {
                arr.push($(this).text());
            });
            document.getElementById("nazwa_towaru").value = arr[0];
            document.getElementById("kod_towaru").value = arr[1];
            document.getElementById("cena_netto").value = arr[2];
            document.getElementById("stawka_Vat").value = arr[3];
            document.getElementById("cena_brutto").value = arr[4];
            document.getElementById("zdjecie_towaru").value = arr[8];
            // kategoria
            var kat_edit = arr[5];
            let element = document.getElementById("kategoria_towarowa");
            element.value = kat_edit;
            // opcje
            var opcje_edit = arr[6];
            var opcje_wybrane = opcje_edit.split(" ");
            var opcjexdd = document.getElementsByName('opcje_towaru');
            for (i = 0; i < opcjexdd.length; i++) {
                for (j = 0; j < opcje_wybrane.length; j++) {
                    if (opcjexdd[i].value == opcje_wybrane[j]) {
                        opcjexdd[i].checked = true;
                    }
                }
            }
            // ocena
            var ocena = document.getElementsByName('ocena_towaru');
            var wybrane = arr[7];
            for (i = 0; i < ocena.length; i++) {
                if (ocena[i].value == wybrane) {
                    ocena[i].checked = true;
                }
            }

            var t = $('#myTable');
            $(this).closest('tr').remove();
            t.trigger('update');
        });
    });
}

function loadJSON(callback) {
    var baza_obj = new XMLHttpRequest();
    baza_obj.overrideMimeType("application/json");
    baza_obj.open('GET', 'js/baza_produktow.json', true);
    baza_obj.onreadystatechange = function () {
        if (baza_obj.readyState == 4 && baza_obj.status == "200") {
            callback(baza_obj.responseText);
        }
    };
    baza_obj.send(null);
}

function zmianaWidoku() {
    var temp = document.getElementById("view");
    var choice = temp.options[temp.selectedIndex].value;
    if (choice == "list") {
        var row = '<div class="col"></div>';
        view_gallery.innerHTML = row;
        $("#myTable").show();
    } else if (choice == "gallery") {
        $("#myTable").hide();
        var row = "";
        var myTable = document.getElementById("myTable").getElementsByTagName('tbody')[0];
        var numRows = myTable.rows.length;
        for (var i = 0; i <= numRows - 1; i++) {
            var cells = myTable.rows[i].getElementsByTagName('td');
            if (i == 0 || i == 8) {
                row = row + '<div class="row"></div>';
            }
            row = row + '<div class="column" style="float: left; width: 25%; padding: 10px; height: 300px;">' +
                '<div><img src="' + cells[8].innerHTML + '" width="100%" height="10%" alt="brak_zdjecia"/></div>' +
                '<div><center>' + cells[0].innerHTML + '</center></div>' +
                '<div><center><b>' + cells[4].innerHTML + 'zł</b></center></div>' +
                '</div>';
        }
        view_gallery.innerHTML = row;
    }
}