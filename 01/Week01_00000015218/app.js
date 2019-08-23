var num = []; //inisialisasi array

function init()
{
	num = JSON.parse(localStorage.getItem("amount"));
	if(num == null) num = [];
	var price = 0;
	document.getElementById('list').innerHTML = "";
	for (i = 0; i < num.length; i++)
	{
		price += Number.parseInt(num[i]['price']);
		
		var ionList = document.createElement("ion-item");
		var p = document.createElement("p");
		p.innerText = num[i]['name'] + " : " + ChangeToRupiah(num[i]['price']);
		ionList.appendChild(p);
		
		document.getElementById('list').appendChild(ionList);
	}
	document.getElementById('price').innerText = ChangeToRupiah(price);
}

//disunting dari internet
function ChangeToRupiah(price)
{
	var rev = parseInt(price, 10).toString().split("").reverse().join("");
	var rev2 = "";
	for (var i = 0; i < rev.length; i++)
	{
		rev2 += rev[i];
		if((i + 1) % 3 === 0 && i !== (rev.length - 1))
		{
			rev2 += ".";
		}
	}
	return "Rp" + rev2.split("").reverse().join("") + ",-";
}

async function destroy()
{
	const alertController = document.querySelector('ion-alert-controller');
	await alertController.componentOnReady();

	if(name.length == 0 || amount == null)
	{
		const alert = await alertController.create(
		{
			header: 'Bersihkan catatan pengeluaran?',
			message: 'Anda tidak akan dapat mengembalikannya lagi setelah membersihkan.',
			buttons:
			[
				{
					text: 'Batal',
					handler: ()=>{}
				},
				{
					text: 'Bersihkan',
					handler: ()=>
					{
						z = [];
						localStorage.removeItem("amount");
						init();
					}
				}
			]
		});
		
		return await alert.present();
	}

	z.push(
	{
		'name': name,
		'amount': amount,
	});

	document.getElementById('name').value = "";
	document.getElementById('amount').value = "";

	init();
}

async function add()
{
	var name = document.getElementById('name').value;
	var amount = document.getElementById('amount').value;

	const alertController = document.querySelector('ion-alert-controller');
	await alertController.componentOnReady();

	if(name.length == 0 || amount == null)
	{
		const alert = await alertController.create(
		{
			header: 'Tunggu sebentar...',
			message: 'Nama maupun jumlah pengeluaran tidak boleh kosong.',
			buttons: ['Tutup']
		});
		return await alert.present();
	}

	num.push(
	{
		'name': name,
		'price': amount,
	});

	document.getElementById('name').value = "";
	document.getElementById('amount').value = "";
	localStorage.setItem("amount", JSON.stringify(num));
	init();
}