'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"index.html": "59953024d2d2ff4af37d29c8c435cc4b",
"/": "59953024d2d2ff4af37d29c8c435cc4b",
"manifest.json": "8a908397ca9f94fc122856f556a9f9ea",
"main.dart.mjs": "cb49d3907410ea6f4fcc55d3cac739a5",
"splash/img/dark-3x.png": "3ca9db02701357e39fd2bcdd0b73fb34",
"splash/img/light-3x.png": "3ca9db02701357e39fd2bcdd0b73fb34",
"splash/img/dark-1x.png": "459065fffc80db7fec404f186bff1374",
"splash/img/light-4x.png": "0655e5120ef406d2804e9863813df276",
"splash/img/light-1x.png": "459065fffc80db7fec404f186bff1374",
"splash/img/dark-2x.png": "aae2809a4e7a84e59d3c93e0089a18e5",
"splash/img/light-2x.png": "aae2809a4e7a84e59d3c93e0089a18e5",
"splash/img/dark-4x.png": "0655e5120ef406d2804e9863813df276",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
".git/logs/refs/heads/main": "28ca8ac4b0fbf914212836d40a88df90",
".git/logs/refs/heads/v3": "69334533332bd2a053e50d96cae185ec",
".git/logs/refs/heads/v5": "1f3ae500edfe9ca2874737df24e39cb9",
".git/logs/refs/heads/v2": "c0ae2b33e2267028654dc2dd033d8215",
".git/logs/refs/heads/v4": "e69bb895c348e45f6987df42791a6d59",
".git/logs/refs/remotes/origin/main": "f051959c222c2cdd7d6ec68ba90cc42d",
".git/logs/refs/remotes/origin/v3": "d8b72628b1aa036b5963ef1c4a1553dd",
".git/logs/refs/remotes/origin/v2": "a31296ae6c48253b40b88492a74c3062",
".git/logs/refs/remotes/origin/v4": "8d266d72fd8bf09f912fcf0526d0a713",
".git/logs/HEAD": "405f7e97054dd22fb407a0f433c17015",
".git/refs/heads/main": "57c91092aa8c14379ab6699455a93819",
".git/refs/heads/v3": "6a152df6a6ac1f5f69fd43e5f0bb940b",
".git/refs/heads/v5": "6a152df6a6ac1f5f69fd43e5f0bb940b",
".git/refs/heads/v2": "b739c5db24a0c4bc12b0bc36cea8f265",
".git/refs/heads/v4": "6a152df6a6ac1f5f69fd43e5f0bb940b",
".git/refs/remotes/origin/main": "fdbfd07e531e9fbf845ad2b99f19d089",
".git/refs/remotes/origin/v3": "b739c5db24a0c4bc12b0bc36cea8f265",
".git/refs/remotes/origin/v2": "57c91092aa8c14379ab6699455a93819",
".git/refs/remotes/origin/v4": "6a152df6a6ac1f5f69fd43e5f0bb940b",
".git/config": "aec5b13a2d2563882d31f76d7ae72fbb",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/d7/9c9180d0c941fc5749c00b79154948921b2187": "a26109f1ce0db6bd2b936d39fafea012",
".git/objects/69/9e4432da88d7b2f78111a4a977ac7715e0cfdc": "4bd76ef0a2d44422f847ac4cf5a64474",
".git/objects/f1/1e046a1628a2e4eb2c5d710c7e0d9387efe354": "0410c597be8463013a035d50f70a3433",
".git/objects/16/039cfb57ee571de660fb0eaa7a04af2af69022": "61b0afafc2322c1eb61cd6ba475a378a",
".git/objects/d1/eefea11d5eeaea96ef5b480bb6d6c8b38397a6": "df85344cc76db65cc34299535c69cf65",
".git/objects/d1/842cfe5b8d0fa59a804c666ad66769979471d5": "6dfa36aa45bb87dc85a1c7633e29fc2b",
".git/objects/bf/4df0f6cd6dfb6720a04e791512433e0262a8bf": "f80e494ea8968b2fe697397505cc29de",
".git/objects/bf/d0f0060f198eed9400e84f36206fb81bffe2be": "fbd71e8541ac57caaad75fcc50f3b1d5",
".git/objects/13/d8061fb9a4117c1d5965593356580a8fedbf4d": "52cab6b127393f521a109fe67a18efbe",
".git/objects/77/22e600a517ce8c13d89497b350ea662bc4af5b": "368c298dbdaed56545f0350f75e3c9aa",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/97/8ef93b736855d6fe80d001109717319f538c3a": "7d717a5c9bb167b0d9e17ff8aadd8e91",
".git/objects/ec/07c2d09a336a948cb7369d916d054a7c28f308": "9c162181b94f04f551b2c3aae00d85e4",
".git/objects/22/fa3e69afa191d97ced50b9260d4365c1c5e09d": "40832f645b118eebfb8a43079f53eded",
".git/objects/87/78541f6c62a5db5f1ccdbd8881bb1d4ad36d3a": "80acc9d77efbd79b152b6e6d5069478e",
".git/objects/87/a06698d7d2e2e48e08e64508bce32c2aec3586": "6fef6fe2dd9bde97bb8e8f7d6bc051e5",
".git/objects/87/ed4ac39ac08053458f7da4e60460a62b2f1f58": "30fb3b5b07b3bdd4da68ed88f8dea0eb",
".git/objects/52/3e60e6cc56b160dba31412e8148a2054c3ca09": "21e073e8b57d75a91a48b7b894cb73f5",
".git/objects/fe/cfe27077550901d8c8d4f18300c0dda1380eaa": "7a929a13e7e9fd084e02f6d800dd7950",
".git/objects/7e/aafd1bb8684a3d304e3b8c02e2d4c2e7454a02": "f1f765b1ef5a1f5b89e6e8cf9e9bb144",
".git/objects/67/f9c603b29ae08a8811da1c0832a965c9c98755": "12731dd3931444ecc8a2cb99d87fb93b",
".git/objects/67/f6b243951051b2b9d29fcb4f5276aecb4a1530": "e5973f52116ce3716db01d3d3cc19cb1",
".git/objects/bc/d248e710df1fe7d87dc244dce3a5ee9e07f7dd": "c4ad0ae71ee6af055b6b7018e62fd902",
".git/objects/bc/307d47fb9a41b27bf23138e57086e00e9b98dd": "1374cc13c34fe096f088dff87b03cd36",
".git/objects/bc/583ffa245950536548ca99f6b04f6c4e889636": "9bbb68d35375c9fcc721eaffec621809",
".git/objects/0d/bb9fe0499632e6b9feb1976d89d37778071e81": "52a9481a483b2b1452cdfacb1643caa0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/10/aebb573eae419ceac93632180d66c4cc54dae7": "9968640936dd3dc371abff06076cfea0",
".git/objects/10/4bcd5f816e4db5625e3be1bef5ad781cf923bf": "cada965da437f59d14665e7ad7220d0a",
".git/objects/10/fa3197104e38ad4cf7ae827f2910f5bc50ec63": "e311ce2a0e44303741b91563d483c03b",
".git/objects/26/b67632063dbe30b6011a7a5996b72003694959": "e1d46408604861fa20276c3d99c5f2d1",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "60564d16cd7502dc412436d67a50ad7d",
".git/objects/f2/381d709ea6b71793ad5108c510a798ea16448f": "6044b4682231a8ee94a32f5962e7cc97",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/7a/53ab4159af866688eb5b28fccdc02c794db348": "d4728e66a84d17fe251c681ca7a0114e",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/ff/8657f53bda2ebfa3c282fa00874384e349cb11": "8a5ef119824ea32bb38e1e7b3c330fc9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/b19b92433a75c0df0df548b475f1494665f0bb": "a84c56d572b56627cf784d6818c1ae25",
".git/objects/d0/8d8657c963186eeb890e82a3a77ff5e10d2bf8": "9153c3d3a7634f92f2d43950e083ffec",
".git/objects/68/d4480a6fdd72458f7219d21c0af9d3fcfaa52f": "b2ff0d5151dfa8f9dd57f45edf9f9a9b",
".git/objects/68/3f7e50f4aecf2990b00b3723dcec8196774e71": "37c71b60d3faa60fd3f09d0fcd2aa5f6",
".git/objects/61/4e01a7ffaaa7492495e9d34559f4c4c5530d9b": "6a41ca2b676c7f8e4ded12663e5096bc",
".git/objects/fd/b404e6404cf9009e827645a6a625cdbebe9d8c": "d81112b2ac0e4cca21282f6e80ac0cd6",
".git/objects/44/75bd9ae3a2412b6870eec44a1ef54bb9ec2ec3": "83fead413984d8cea9bb0f33d79289db",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/e4d2f94a84252f835eba73a55f28cd38c318e3": "296f6468ece1d09fe24c688f5ce24c41",
".git/objects/23/828dfae7940315eebd12477221c652dd74bfa8": "47c11c79ebfce6d33a5d9603b6c1da27",
".git/objects/65/c4a12504dacb5fdd70242147a1e08758231fc6": "226fc14a7ea28a01196c5abd5aa36b20",
".git/objects/4b/9f5ef32a626e77bd5d621a56c49af38c203923": "dd419ac6d629795e1617a1a0231b909e",
".git/objects/af/272108c908bec1db9f6da225c74f766f1d5614": "3f9caf86bbebab0aee7709ffe0d34520",
".git/objects/af/a08db5e7640f826cdebaf906618988fbad6d24": "fe97a04ef7657aa494f7b7cf0526b614",
".git/objects/af/73228dec28108f9aadb8537568a66a44e7ceae": "647913202bc98231abfd61cdeb35c557",
".git/objects/02/2e3db9fe0e487929c621ba2ce933e2f11942fa": "0113ff04178ff2a472591d37b2b4fb49",
".git/objects/fc/e32ae19201189f1d059ff6d0f89cfa2c6866d8": "121d97b9845eec909e6af1d6c5deb960",
".git/objects/fc/744270b7df67276dedd63166543a4dbf459e86": "6e989fd1c29ef625a3eb8dff1b9f1cd2",
".git/objects/04/82ddbc45e89286257869c7e4421038003b7f05": "867156069bc461c42a17dc95053b8553",
".git/objects/4c/01c130933eb22b5c37571eb9f294f3eb45ada0": "2a03d40482a49c621a295d16543ecb7b",
".git/objects/ca/40aa7c47745560192009c731d4c61fc28fa403": "200279b7619b8a45c77289037b4d6780",
".git/objects/ca/08582469675120cd5c048fce76d830334588eb": "9d51304b155b094710d6a5bf416d7e0b",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/99/5a0dfd88964f6faf76d4b5c9a6e190afe2bd3d": "01823b50da0f2951db56477d42f91378",
".git/objects/37/8298ffb0682569d71739e9a864b8c37837094e": "57d7979272f3f9c0b8086037393bc46d",
".git/objects/37/d7140ba95406a09c13654e6248625b81af777d": "5265cbeaff4b231c3fe14e4a3011e9f9",
".git/objects/9e/859d63a5681cd9cad098db3477ac0095d565d9": "5e5a068950fe0e4b117baa63c327f3a1",
".git/objects/a8/bd124f21a281d3da45e117978d7650834f3500": "16cc7da49540c85328eae9c35982f080",
".git/objects/25/605eaa3a20a9be67ed8c15524176935679260c": "af43694e8280074f9a4715a9e858a9ef",
".git/objects/63/171a8d2ac07172df1c16745368df287a0cfede": "070bf27945886ed357279a1a34b49d50",
".git/objects/00/dc2c0d9327e3c3eb590c6b648e66df04f03fcb": "cab8b7e9324681acb8efab8a849047eb",
".git/objects/e1/e413ef6ce9ee308944714f3e747d57b6693fff": "32ee0ff15c5cf2e525783fcf03ea1dd9",
".git/objects/e1/d6bdee68eecf6d67eb91f1a4df44a2ebc1200a": "b274540098b30903f5ec7895e991193a",
".git/objects/f7/910640ad7ecdceb355102b3ef8de79b6ef287f": "dd38c14dfe95400bd0e8bc87955d3bd8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e22bcde72321184b371fa9f7e24ec41f9851c2": "ee75d21eb14dcfcca675cde7ebba6967",
".git/objects/d9/45c750980be2bfca4a5e73b6a7c3d35b67c1e7": "e1cf9063ca9d606130ad59ad1cae013a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/31f48fa9085ba21010d35725cce4891fdbe515": "6f864d255aa662374e8eb9302f592923",
".git/objects/41/62a6c7a5373cfbef39393ff83e4490e9bc9b42": "c07c6909de4ff3578a9cbe76018fb75e",
".git/objects/41/a6e04ce8904c6dd6611dd4cc6f778fa68c4874": "ffeaa9ac2daf39973ca8ddda8c7515f8",
".git/objects/ed/312206b9f934e3b194220ac914e8658b5cd494": "21cf924805610c3fe08da439c39513d5",
".git/objects/a6/081ee04614963cc89f6afbc2951c12d9bca00c": "4e5781fc8f6ed1c69bd3a381fa9bcb48",
".git/objects/0e/9a76355cf47f54a1e600daca9e9bc8b22c5ee1": "fc51335658a551a48091080740a7e26f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/82f012f07e6a2ac3c5ffe34e8102dfdcb2bab5": "d4b6353d7bd83038da7386584ee07ec4",
".git/objects/9f/ea6573cbc15c6e5c7ea358bcda1d97371acf3b": "a8554f845d8e80192313d0772d62f017",
".git/objects/c1/3f3e5904b8ded21e64098082fd8b279977247f": "00eb2af3cd65aa5512316733267cc848",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "d967e4078cfd2a7d2be2403ce4dc12d2",
".git/objects/cb/3c20feae034d6ebd76c3c28309b4b6bad68f5c": "e6c838911346b1c54407a65c6e53d3cd",
".git/objects/47/3090383ba6c3d00a691025f640707c46c41c48": "3b4ed9efa450673a6c660e67c6bb0a59",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/e6/cf1d3e7808e49f004595db94ce77ab52c09519": "ab9fb2e9ab1f957f584d89f191ff123a",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/d8/573dd69f0b0900a632e82ff94ba545a8698cbc": "80929ee7a63a942e47d7453f3c19389b",
".git/objects/d8/164580cc056d1b7bf0bcf01f41a198444e8b1b": "952a29fa7fbc0a0a82b76015322e72f6",
".git/objects/4a/0a1dcc85bc5f0a9434e61053fcfe02ecd5678c": "8199243f98639fcec8063a6abeb24dbe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/c0/a7d4e2162a6a2872a08692f02da84105d620d5": "1cf5e4d5a11795afa2cbfc589e595afe",
".git/objects/a0/fa327b0df1db3af7bce84b8a33b6017b7381e3": "c4d98dc6d83dd148e1c3412166753575",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "64f0af74103437bb0d159ba1ee3f7ce9",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/268395c1f5f1f3e7548f44c82064b4190ae274": "b8289ea9bf7fc6a6cef24b81f443c2fd",
".git/objects/1d/92d53fd3f2952526b6dec0a13ae51bbd79752d": "48bf5dba645c0c89809a09bbf57c1d45",
".git/objects/3d/e149087e3eb27ea420da46651e49df3e6d2cba": "020666c6466e08057bba1ce23a9482e5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/8a/e55f34ed16ac72b63d6f1f9049dc95726d24c3": "273dd13fb5191bbd4f925cb7b284d293",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/0a/bb477f888fc3b54050139bb94ce2399807d27f": "1af1bc0f9e8a83df0daf0c2d4e56a0c4",
".git/objects/e7/07364848e92dc8e13fa2fafc70e34484d0216d": "77a9b6ece694429fe0209f5adb89eed3",
".git/objects/03/b120489aa7049d51b72ba748f61ffd63496994": "59b8b02048a8a4395b9fc091666c1791",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c46af0fdd6092d188e888a61a6c9ee3f62196c": "11e4fd0fbd4b6475b4edcd45cbe9fdff",
".git/objects/b9/f74cb165bfb0ee77160d2342bd02aa36a3db3a": "7d15c1f5aa40f025790d175bae5102d1",
".git/objects/a5/5e9a23863754fa98316cf73f964d1fdcf3858f": "873c77e6ff167fc816cfb106c750edd6",
".git/objects/80/290318c818172112ebd664bb46343723ce196a": "10fd692976995b53b94011fb8cb5b7d6",
".git/objects/80/8761aaea3a90f9f31a07af038ae8aa333ce67e": "9851ca2241a560c0dd51e4b27ba433c1",
".git/objects/36/c429b2a4030a7aa29637067d64b1aa0dd0fd37": "c8e1239c8b67eec892d2e8bad780a40b",
".git/objects/3c/28bbb6c385ce608d50927a083be05bd55527a7": "fe6072b661e0ca7f804f984644515ac3",
".git/objects/3c/6e36b3de8e674c796a4b6d04aec9645f1735d7": "c2ddd66d7cc496a552a140e153395022",
".git/objects/3c/566cd616f99a6998c240da9231795ffd8086cb": "a6c61c87dfbe3daac397af3a4aea0574",
".git/objects/3c/3a349fc9c5be0c238917749f2ed2fd16379fb1": "c4c9fc1fe6e9b45d2305a2bab747a3a1",
".git/objects/3c/2cc46c631422c7e3025c6ae72359ccd7774ee5": "9755f0a4302c011193a65afdde41803f",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d5/816a171d0e4c7d9d8a03d7de8663f824a2e526": "6228df2b48cb93bd0c4305a830d85f04",
".git/objects/d5/4ff0e396af50500245b5743bee0b653963a0a7": "872f8254b777bffe596b84bd5f0b1291",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/18/87d78fece23ff9890e0b7532823d92082831f6": "293d5c6d8b224c7bc7702f7c58f31462",
".git/objects/18/9993cc2be31f157f132af86d224d53643e58ed": "6985d463798749c1590ddfbf29d42ae9",
".git/objects/18/5d395d73533e53e2b8d8ba1849d39833516eea": "e998ee07bf9a0c8b59ea7d219007d881",
".git/objects/c8/29c37fa98938bb7a732476da4cbeb5da587272": "ab7a3714940ae8d0bf0bbb48904ae9b8",
".git/objects/be/e65e21098b149795b9e228101317fc50fa7768": "c9924e90a96b76581b31078c1088a437",
".git/objects/d6/ae6d5ee52b568bc0cfc86e17ab337e48778188": "c7cce13f3f14b165eb6c855de3da6a15",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/6d/3be35f2d4cc80b574625643f2c46bfa639a234": "7b78c9c65d06dd30d43044b8708891d3",
".git/objects/a3/e60577291eb2a2cef91850dfcda35072cb77ca": "7ad841a2c644ec7d31fa71e2bd397d33",
".git/objects/c4/d7d35cd34571dcf1a871cd374f7c08b88dd1d3": "04ab89d065e5ba3327a55d09485babb0",
".git/objects/1e/0cf3f2a4aefa09d3f2f2b94cdd40847c1ed159": "ea373905ceb4fba0afef609efe36fb73",
".git/objects/1e/a103a433964ec57ddf61c16de8fab0d0674884": "d9fe9113e3521485069acd8864d56e61",
".git/objects/de/0109018c22dae72973b731eb401ff646405769": "514e8a7bec711a0bb453d2fecba03746",
".git/objects/c7/8207ba35e23f32bd530341137d18b8e9ee66d1": "1e61a4f8b3c7d75908f09d4cf686e20e",
".git/objects/a9/d112ec40a01e346eb6867190a6353e60d8b69b": "b003f5f5280d8abd360f4ac0efd19470",
".git/objects/4e/40f2b83c9180ada5de6026ed8ac5ce3da7d7af": "b023202566f5a193dbf45dcb63a61181",
".git/objects/72/5b9f5ae96c15b13d9d3536a6538fc85305a45e": "72535b3914a84725560673d34bfa3eac",
".git/objects/79/9d163ff8f1b9dfbf6d5cb5913f8a3920fb2d88": "975d41013cb2518bf0a5b49f58a99a20",
".git/objects/79/7a2ecef3a5876e63e680ec48fdb64cb29badc0": "adb6a5d63e47521e0c5877ced090683b",
".git/objects/79/46a30183652ea5c5f7ef2f341cceeb391ed41e": "66a8a4fb9542de3e209595cca7d128ea",
".git/objects/79/bc41766637db7525dce763ec08435e9ebf324c": "6d0f598fc57eccef167c5cedb60edfca",
".git/objects/95/1a0cccf473cbee8a068bf3c1c05cbadaf6517d": "551b2b292b35697face431c07dae1a7a",
".git/objects/60/f737f31b769df8743c16ce51196cbb937d36ca": "deef43896af619943cd237b13dc8d226",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/3e/ae8dce357e874e07a444879419ae38857380a1": "eb4ef6efbd0310bf828b90d62ca17193",
".git/objects/2c/f1a4d70f43cd2c06fe8eb4e7a0fe7eea06902a": "e8ef706521f30a3f2530f6e5ec9446f2",
".git/objects/8c/2e25bd796098894b8322034ab4ee8550e69b89": "a794202982af499f88650a6f7883446e",
".git/objects/59/1838e9d4e0da65f86f99da3c78fc9d01398b8e": "8d6addfc6200a35b13ee3a87c2b85526",
".git/objects/5e/a4d0661514766eeb899dd4bac9775cb76267f6": "464f7d7030b51c1ed081a935a98dcba2",
".git/objects/f4/b3edf54c2ee4f0653c608f700c4d63d5106919": "6861520a23c6180636dd1c6bd54cb178",
".git/objects/9b/bf9c27d47243600ea06af82243b64670e07026": "861ed2361268322fd9874fa246f42d00",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2f/506379edc24b5796840b5a7876411f0f2ca966": "11b2561f95ddc646240d1248b3a94edf",
".git/objects/2f/7f92ec64172664922bda46e970a5d79e99eb59": "3d6b679db0d336b5444db3d0db98f3f3",
".git/objects/62/5a1082d45bcda211b66770d5539bb99cf52fbd": "927ec2e3d8944e88482c6d1031e64b46",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/fb/96707ad63698d036b0e432f60777fdb78b490c": "88fce40a4a9a25cb265f2c1c1b124825",
".git/objects/30/33fdd95936f5ba2110188352036f0a47b5ff9c": "a727756c0f0dd59b5350c2c47ae7235e",
".git/objects/30/c02757838f65e29b5fa156b45bcc596d913b60": "6caa4510e51032e7352bcb69bd269b5c",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "c0894a456eacb47d59a461ebfdde00e6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/COMMIT_EDITMSG": "f4d5d0c0671be202bc241807c243e80b",
".git/HEAD": "bc4d83d3ed1fb4b0d73480b9e30f41a1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/index": "e8a848251e9b463ffe7d85d7faf1ed4d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"main.dart.js": "83fbb7ba549c126ba3af9185594e38d4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"main.dart.wasm": "5d9d84d45069c1d61d2689b5ba20490a",
"flutter_bootstrap.js": "fb4bd6a4c5bc012c7c19ced3367407e3",
"version.json": "4139d2170fc7e38e7f15865b820382ee",
"assets/AssetManifest.bin.json": "4b2364250a1fc5b30cfcab59beeaac91",
"assets/AssetManifest.bin": "9918fcb98ebb0f6fadeeb71cd91a5905",
"assets/NOTICES": "1dc38c7de6d6e564d14003bd5cc15904",
"assets/AssetManifest.json": "1ead0de9597cc6b21384315a41f04527",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/FontManifest.json": "30dbdca0d297b3b8954b6ffb843fe2a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/php.svg": "3cc2d02313c9fb55673de11c09a2d1ad",
"assets/assets/images/laravel.svg": "82639bcdcf4afbefaebfed38a7c7fab4",
"assets/assets/images/flutter.svg": "9a6e81be6ff5b09956f4f85fe1f0a89f",
"assets/assets/images/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/proyects/touch.png": "b45d59b9dfb6e025f7cb832d921503ee",
"assets/assets/images/proyects/transix_content.png": "37687c7596dfa40709231aba4ba9db6b",
"assets/assets/images/proyects/intelix_quiz.png": "91ffea9be3f2843999867580cdf07c64",
"assets/assets/images/proyects/fxlive_capital.png": "a675a60dee54dbfce61fba4f2d34bbbb",
"assets/assets/images/proyects/shopping_analist.png": "801531186f1faa51a649376886ae710d",
"assets/assets/images/proyects/saborcubano_menu.png": "56f9a9b9f6c52040990cb19bf2256ea3",
"assets/assets/images/proyects/intelix_evaluation.png": "7e9bca0b4955bd2bd9d2531799e71c49",
"assets/assets/images/proyects/saborcubano_rest.png": "989739fe8b3fc26e69f713eaff7da62f",
"assets/assets/images/proyects/saborcubano_web.png": "8b580aafc4f217efd6c645cb75be0ac6",
"assets/assets/images/proyects/befunding.png": "a00f3f0617e47cdae051910f0f1997cb",
"assets/assets/images/proyects/odoo_home.png": "3167d29fcead75fd2da6d6b2ff209d6e",
"assets/assets/images/proyects/odoo_products.png": "6a3be6148aabe554214da2981e78aa3f",
"assets/assets/images/proyects/mibazar2.png": "eb455f0f014284c9dacd63cd831ee414",
"assets/assets/images/proyects/touch-converter.png": "231ae8e7b956861d1ef6c33ce2ce3187",
"assets/assets/images/proyects/fxlive_capital_categories.png": "52012c7a298378891a05979cf29319b4",
"assets/assets/images/proyects/mibazar.png": "86c6def4802d927ad530b83d6957fcae",
"assets/assets/images/proyects/transix_categ.png": "117e70d90dce4d68ede7d9637d00d73b",
"assets/assets/images/proyects/tucompra_drawer.png": "aa5fc4020eb8eff5ddb7ac78b6e9213a",
"assets/assets/images/proyects/mmtech-central.png": "4bc23743ac5d2bbad56483614c174001",
"assets/assets/images/proyects/saborcubano_home.png": "5d58d7d2169ce447e5d47d8f283b4364",
"assets/assets/images/proyects/tucompra_qr.png": "2c648e906766bf5a750b6d966db20ffa",
"assets/assets/images/proyects/odoo_sales.png": "6bb9d11c97a85966d3745cab515909b5",
"assets/assets/images/proyects/tucompra_home.png": "83c05bce343afa53d390a7a79e255af8",
"assets/assets/images/proyects/touch-home.png": "fd289a55444457657adb146317d36d6b",
"assets/assets/images/proyects/qvalike.png": "11f2418a8dc872773b2e52a4cff71bd1",
"assets/assets/images/proyects/odoo_sales_detail.png": "bd723a8b9c3b9b4f583d2276ee295895",
"assets/assets/images/proyects/transix_splash.png": "419579ea7239dec73a1c8bbb894dbe0b",
"assets/assets/images/proyects/saborcubano.png": "3435be032316607927620849adf369c7",
"assets/assets/images/proyects/mmtech_central_transactions.png": "58669572c7f1e66dc94fba67e8e6a0e3",
"assets/assets/images/proyects/intelix_home.png": "2754e0b9038defef96acc2949f266c32",
"assets/assets/images/hasura.svg": "24e6e0a6122243022f5c0dc7631109ff",
"assets/assets/images/icon-portfolio.png": "9cf39f82193453e685361b50be2b3ffa",
"assets/assets/images/sqlite.svg": "266cdf99ee33451f17ded1414a10254f",
"assets/assets/images/golang.svg": "da9b1fca96a8bcbcfa87b14985886764",
"assets/assets/images/yii.svg": "76994b1be83b1a10513ab12286220b0b",
"assets/assets/images/docker.svg": "f6b321e2cc55c2bcef0fc45a6b346acc",
"assets/assets/images/angular.svg": "e409c049456aaebb70112ab81209f674",
"assets/assets/images/mongo.svg": "ebf723d47dc4203868088d005452543b",
"assets/assets/images/github.svg": "c23a95fcb4b1d25765107e4e73b06438",
"assets/assets/images/me.jpg": "eb4fa0c6be164728cfed99a72fcbf675",
"assets/assets/images/postgres.svg": "bae4eabea5c2343f4346dcbb29ecf4ee",
"assets/assets/images/redis.svg": "b933114f1c9065fbce04bf0a643299de",
"assets/assets/images/graphql.svg": "fa9917f65a8a054a150ed6cc318b163d",
"assets/assets/images/postman.svg": "fbfb57a181ce251926d686d12e6cee5a",
"assets/assets/files/cv.pdf": "ec1b11dcfe221321c1e012784a533557",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
