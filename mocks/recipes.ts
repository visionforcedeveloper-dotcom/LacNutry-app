import { Recipe } from "@/types/recipe";

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Smoothie Bowl Tropical",
    description: "Bowl refrescante com frutas tropicais e granola sem lactose",
    imageUrl: "https://zenandspice.com/wp-content/uploads/2017/01/tropicalsmoothie-3-831x1024.jpg",
    prepTime: 10,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 bananas congeladas",
      "1 manga madura",
      "200ml leite de coco",
      "1 colher de sopa de mel",
      "Granola sem lactose",
      "Frutas frescas para decorar"
    ],
    instructions: [
      "Bata as bananas e manga com leite de coco no liquidificador",
      "Despeje em tigelas",
      "Decore com granola e frutas frescas",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 320,
      protein: 4,
      carbs: 68,
      fat: 6
    },
    tags: ["café da manhã", "vegano", "frutas"],
    isLactoseFree: true
  },
  {
    id: "2",
    title: "Risoto de Limão Siciliano",
    description: "Risoto cremoso sem lactose com toque cítrico",
    imageUrl: "https://cdn.casaeculinaria.com/wp-content/uploads/2023/08/27143645/Risoto-de-limao-siciliano.webp",
    prepTime: 35,
    servings: 4,
    difficulty: "médio",
    ingredients: [
      "300g arroz arbóreo",
      "1 litro de caldo de legumes",
      "1 cebola picada",
      "2 limões sicilianos",
      "4 colheres de azeite",
      "Sal e pimenta a gosto",
      "Ervas frescas"
    ],
    instructions: [
      "Refogue a cebola no azeite",
      "Adicione o arroz e torre levemente",
      "Acrescente o caldo aos poucos, mexendo sempre",
      "Finalize com suco e raspas de limão",
      "Tempere e sirva com ervas frescas"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 8,
      carbs: 72,
      fat: 9
    },
    tags: ["almoço", "jantar", "italiano"],
    isLactoseFree: true
  },
  {
    id: "3",
    title: "Brownie de Chocolate Vegano",
    description: "Brownie denso e úmido, 100% sem lactose",
    imageUrl: "https://veganoporquesim.com.br/wp-content/uploads/2023/02/Brownie-Vegano.webp",
    prepTime: 40,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "200g chocolate amargo sem lactose",
      "150g farinha de trigo",
      "100g açúcar mascavo",
      "100ml óleo de coco",
      "3 ovos",
      "1 colher de chá de essência de baunilha",
      "50g cacau em pó"
    ],
    instructions: [
      "Derreta o chocolate com o óleo",
      "Misture os ovos e açúcar",
      "Combine os ingredientes secos",
      "Una tudo e despeje em forma untada",
      "Asse por 25-30 minutos a 180°C"
    ],
    nutritionInfo: {
      calories: 245,
      protein: 4,
      carbs: 28,
      fat: 14
    },
    tags: ["sobremesa", "chocolate", "vegano"],
    isLactoseFree: true
  },
  {
    id: "4",
    title: "Curry Tailandês com Legumes",
    description: "Curry aromático com leite de coco e vegetais frescos",
    imageUrl: "https://cdn.shopify.com/s/files/1/0774/7787/1912/files/Currydelegumes.png?v=1719335909",
    prepTime: 30,
    servings: 4,
    difficulty: "médio",
    ingredients: [
      "400ml leite de coco",
      "2 colheres de pasta de curry vermelho",
      "Legumes variados",
      "200g tofu",
      "Molho de peixe ou shoyu",
      "Folhas de manjericão tailandês",
      "Arroz para acompanhar"
    ],
    instructions: [
      "Salteie a pasta de curry em um pouco de óleo",
      "Adicione o leite de coco e deixe ferver",
      "Acrescente os legumes e tofu",
      "Cozinhe até os legumes ficarem macios",
      "Finalize com manjericão e sirva com arroz"
    ],
    nutritionInfo: {
      calories: 420,
      protein: 15,
      carbs: 45,
      fat: 22
    },
    tags: ["almoço", "jantar", "tailandês", "vegano"],
    isLactoseFree: true
  },
  {
    id: "5",
    title: "Panquecas de Aveia",
    description: "Panquecas leves e nutritivas para o café da manhã",
    imageUrl: "https://cdn0.tudoreceitas.com/pt/posts/2/2/0/panqueca_de_aveia_light_1022_orig.jpg",
    prepTime: 15,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de aveia em flocos",
      "2 bananas maduras",
      "300ml leite de amêndoas",
      "2 ovos",
      "1 colher de chá de fermento",
      "Mel ou xarope de bordo",
      "Frutas frescas"
    ],
    instructions: [
      "Bata todos os ingredientes no liquidificador",
      "Aqueça uma frigideira antiaderente",
      "Despeje porções da massa",
      "Cozinhe até formar bolhas e vire",
      "Sirva com mel e frutas"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 11,
      carbs: 42,
      fat: 8
    },
    tags: ["café da manhã", "saudável", "fitness"],
    isLactoseFree: true
  },
  {
    id: "6",
    title: "Salada Buddha Bowl",
    description: "Bowl nutritivo com quinoa, legumes e molho tahine",
    imageUrl: "https://realfood.tesco.com/media/images/BuddhaBowl-LGH-ac16b7e0-7e25-4d7b-b108-21ae7c043590-0-1400x919.jpg",
    prepTime: 25,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 xícara de quinoa cozida",
      "1 abacate",
      "200g grão de bico assado",
      "Vegetais variados",
      "2 colheres de tahine",
      "Suco de 1 limão",
      "Sementes de gergelim"
    ],
    instructions: [
      "Cozinhe a quinoa e deixe esfriar",
      "Asse o grão de bico com temperos",
      "Prepare os vegetais",
      "Monte os bowls com todos os ingredientes",
      "Prepare o molho de tahine com limão",
      "Regue e finalize com gergelim"
    ],
    nutritionInfo: {
      calories: 520,
      protein: 18,
      carbs: 62,
      fat: 24
    },
    tags: ["almoço", "vegano", "saudável"],
    isLactoseFree: true
  },
  {
    id: "7",
    title: "Pasta ao Pesto de Manjericão",
    description: "Macarrão com pesto caseiro sem queijo, fresco e aromático",
    imageUrl: "https://guiadacozinha.com.br/wp-content/uploads/2019/10/espaguete-ao-pesto.jpg",
    prepTime: 20,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "400g massa de sua preferência",
      "2 xícaras de manjericão fresco",
      "100ml azeite extra virgem",
      "3 dentes de alho",
      "50g castanhas de caju",
      "Suco de 1 limão",
      "Sal e pimenta a gosto"
    ],
    instructions: [
      "Cozinhe a massa al dente",
      "Bata manjericão, alho, castanhas e azeite no processador",
      "Adicione limão, sal e pimenta",
      "Misture o pesto com a massa escorrida",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 450,
      protein: 12,
      carbs: 58,
      fat: 20
    },
    tags: ["almoço", "jantar", "italiano", "vegano"],
    isLactoseFree: true
  },
  {
    id: "8",
    title: "Mousse de Chocolate com Abacate",
    description: "Sobremesa cremosa e saudável feita com abacate",
    imageUrl: "https://receitadaboa.com.br/wp-content/uploads/2024/08/iStock-2063267923.jpg",
    prepTime: 10,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "2 abacates maduros",
      "4 colheres de cacau em pó",
      "4 colheres de mel ou xarope de bordo",
      "1 colher de chá de essência de baunilha",
      "Pitada de sal",
      "Frutas vermelhas para decorar"
    ],
    instructions: [
      "Bata todos os ingredientes no processador até ficar cremoso",
      "Ajuste o açúcar a gosto",
      "Leve à geladeira por 30 minutos",
      "Sirva em taças decoradas com frutas vermelhas"
    ],
    nutritionInfo: {
      calories: 210,
      protein: 3,
      carbs: 25,
      fat: 12
    },
    tags: ["sobremesa", "vegano", "saudável", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "9",
    title: "Wrap de Frango Grelhado",
    description: "Wrap recheado com frango, vegetais e molho especial",
    imageUrl: "https://sabores-new.s3.amazonaws.com/public/2024/11/wrap-de-frango-com-abacate-1.jpg",
    prepTime: 25,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 peitos de frango",
      "2 tortilhas sem lactose",
      "Alface, tomate, cebola roxa",
      "1 abacate",
      "Maionese vegana",
      "Temperos a gosto"
    ],
    instructions: [
      "Tempere e grelhe o frango",
      "Corte o frango em tiras",
      "Aqueça as tortilhas",
      "Monte com todos os ingredientes",
      "Enrole e sirva"
    ],
    nutritionInfo: {
      calories: 480,
      protein: 38,
      carbs: 42,
      fat: 18
    },
    tags: ["almoço", "jantar", "fitness"],
    isLactoseFree: true
  },
  {
    id: "10",
    title: "Torta de Banana com Canela",
    description: "Torta caseira aconchegante sem lactose",
    imageUrl: "https://static.itdg.com.br/images/360-240/43863d1d639d5d56d295d3062cf8ed35/328655-original.jpg",
    prepTime: 60,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "3 bananas maduras",
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar mascavo",
      "100ml óleo de coco",
      "3 ovos",
      "1 colher de sopa de canela",
      "1 colher de sopa de fermento"
    ],
    instructions: [
      "Amasse as bananas",
      "Misture com ovos, açúcar e óleo",
      "Adicione farinha, canela e fermento",
      "Despeje em forma untada",
      "Asse por 40 minutos a 180°C"
    ],
    nutritionInfo: {
      calories: 320,
      protein: 6,
      carbs: 48,
      fat: 12
    },
    tags: ["sobremesa", "café da manhã"],
    isLactoseFree: true
  },
  {
    id: "11",
    title: "Sopa de Abóbora com Gengibre",
    description: "Sopa cremosa e reconfortante para dias frios",
    imageUrl: "https://cdn.oceanserver.com.br/lojas/naturallis/uploads_produto/naturallis-63-61151af8212d9.jpg",
    prepTime: 35,
    servings: 6,
    difficulty: "fácil",
    ingredients: [
      "1kg abóbora",
      "400ml leite de coco",
      "1 cebola",
      "2 dentes de alho",
      "3cm gengibre fresco",
      "Caldo de legumes",
      "Azeite, sal e pimenta"
    ],
    instructions: [
      "Refogue cebola, alho e gengibre",
      "Adicione a abóbora em cubos",
      "Cubra com caldo de legumes",
      "Cozinhe até a abóbora amolecer",
      "Bata no liquidificador com leite de coco",
      "Ajuste temperos e sirva quente"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 4,
      carbs: 22,
      fat: 9
    },
    tags: ["almoço", "jantar", "vegano", "saudável"],
    isLactoseFree: true
  },
  {
    id: "12",
    title: "Hambúrguer Vegetal de Grão de Bico",
    description: "Hambúrguer saudável e nutritivo 100% vegetal",
    imageUrl: "https://receitadaboa.com.br/wp-content/uploads/2024/05/iStock-905921648.jpg",
    prepTime: 30,
    servings: 4,
    difficulty: "médio",
    ingredients: [
      "400g grão de bico cozido",
      "1 cebola picada",
      "2 dentes de alho",
      "3 colheres de farinha de aveia",
      "Temperos: cominho, páprica, sal",
      "Pão sem lactose para hambúrguer",
      "Vegetais para acompanhar"
    ],
    instructions: [
      "Amasse o grão de bico deixando alguns pedaços",
      "Misture com cebola, alho e temperos",
      "Adicione farinha até dar liga",
      "Modele os hambúrgueres",
      "Grelhe ou asse até dourar dos dois lados",
      "Monte no pão com seus vegetais favoritos"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 16,
      carbs: 58,
      fat: 10
    },
    tags: ["almoço", "jantar", "vegano", "fitness"],
    isLactoseFree: true
  },
  {
    id: "13",
    title: "Pad Thai Vegetariano",
    description: "Clássico tailandês com macarrão de arroz e vegetais",
    imageUrl: "https://fullofplants.com/wp-content/uploads/2022/03/easy-vegan-pad-thai-noodle-dish-with-bean-sprouts-thumb.jpg",
    prepTime: 30,
    servings: 3,
    difficulty: "médio",
    ingredients: [
      "200g macarrão de arroz",
      "200g tofu firme",
      "2 ovos",
      "Broto de feijão, cebolinha",
      "3 colheres de molho de tamarindo",
      "2 colheres de shoyu",
      "Amendoim torrado e limão"
    ],
    instructions: [
      "Hidrate o macarrão conforme embalagem",
      "Frite o tofu em cubos até dourar",
      "Empurre para o lado e faça ovos mexidos",
      "Adicione macarrão e molhos",
      "Acrescente vegetais e misture rapidamente",
      "Sirva com amendoim e limão"
    ],
    nutritionInfo: {
      calories: 520,
      protein: 22,
      carbs: 68,
      fat: 18
    },
    tags: ["almoço", "jantar", "tailandês"],
    isLactoseFree: true
  },
  {
    id: "14",
    title: "Muffins de Blueberry",
    description: "Muffins macios e deliciosos para o café da manhã",
    imageUrl: "https://www.kingarthurbaking.com/sites/default/files/2022-12/KABC_Quick-Breads_Blueberry-Muffin_08304.jpg",
    prepTime: 35,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "150g açúcar",
      "200ml leite de amêndoas",
      "100ml óleo vegetal",
      "2 ovos",
      "200g blueberries",
      "1 colher de sopa de fermento"
    ],
    instructions: [
      "Misture ingredientes secos",
      "Em outra tigela, misture líquidos",
      "Combine tudo delicadamente",
      "Adicione os blueberries",
      "Distribua em forminhas",
      "Asse por 20-25 minutos a 180°C"
    ],
    nutritionInfo: {
      calories: 220,
      protein: 4,
      carbs: 32,
      fat: 9
    },
    tags: ["café da manhã", "sobremesa"],
    isLactoseFree: true
  },
  {
    id: "15",
    title: "Tacos de Peixe com Repolho",
    description: "Tacos leves e crocantes com peixe grelhado",
    imageUrl: "https://static.vecteezy.com/ti/fotos-gratis/p1/16117743-tacos-de-peixe-com-molho-de-manga-e-repolho-roxo-foto.jpg",
    prepTime: 25,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "400g filé de peixe branco",
      "8 tortilhas de milho",
      "2 xícaras de repolho roxo ralado",
      "1 abacate",
      "Coentro fresco",
      "Limão",
      "Maionese vegana"
    ],
    instructions: [
      "Tempere e grelhe o peixe",
      "Aqueça as tortilhas",
      "Prepare o molho com maionese e limão",
      "Monte os tacos: tortilha, repolho, peixe",
      "Finalize com abacate, coentro e molho"
    ],
    nutritionInfo: {
      calories: 420,
      protein: 32,
      carbs: 38,
      fat: 16
    },
    tags: ["almoço", "jantar", "mexicano"],
    isLactoseFree: true
  },
  {
    id: "16",
    title: "Bolo de Cenoura sem Lactose",
    description: "Bolo macio e úmido com cobertura de chocolate",
    imageUrl: "https://i.ytimg.com/vi/rYOk58V6FNg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC6VYVBY2Wwxj1PqWfuIjrKkwNxJQ",
    prepTime: 50,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "3 cenouras médias",
      "3 ovos",
      "1 xícara de óleo vegetal",
      "2 xícaras de açúcar",
      "2 e 1/2 xícaras de farinha de trigo",
      "1 colher de sopa de fermento",
      "Cobertura: 200g chocolate sem lactose, 3 colheres de óleo de coco"
    ],
    instructions: [
      "Bata as cenouras, ovos e óleo no liquidificador",
      "Misture açúcar e farinha em uma tigela",
      "Combine tudo e adicione o fermento",
      "Despeje em forma untada",
      "Asse por 40 minutos a 180°C",
      "Derreta o chocolate com óleo para cobertura",
      "Cubra o bolo ainda quente"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 5,
      carbs: 52,
      fat: 18
    },
    tags: ["sobremesa", "bolo", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "17",
    title: "Suco Verde Detox",
    description: "Suco nutritivo com couve, limão e gengibre",
    imageUrl: "https://nutrialinesantos.com.br/wp-content/uploads/2017/12/Suco-detox-Nutricionista-Aline-Santos.jpg",
    prepTime: 10,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 folhas de couve",
      "1 maçã verde",
      "Suco de 2 limões",
      "1 pedaço de gengibre",
      "1 pepino",
      "500ml de água de coco"
    ],
    instructions: [
      "Lave bem todos os ingredientes",
      "Corte em pedaços",
      "Bata tudo no liquidificador",
      "Coe se preferir",
      "Sirva gelado"
    ],
    nutritionInfo: {
      calories: 95,
      protein: 2,
      carbs: 22,
      fat: 0
    },
    tags: ["suco", "detox", "vegano", "saudável"],
    isLactoseFree: true
  },
  {
    id: "18",
    title: "Coxinha de Frango Sem Lactose",
    description: "Salgado clássico brasileiro com massa crocante",
    imageUrl: "https://cdn.urbano.com.br/uploads/coxinha-receitas-urbano-alimentos-800.jpg",
    prepTime: 60,
    servings: 20,
    difficulty: "médio",
    ingredients: [
      "500g peito de frango",
      "2 xícaras de farinha de trigo",
      "2 xícaras de caldo de frango",
      "1 cebola picada",
      "2 dentes de alho",
      "Farinha de rosca",
      "Óleo para fritar"
    ],
    instructions: [
      "Cozinhe e desfiie o frango",
      "Refogue com cebola e alho",
      "Ferva o caldo e adicione farinha aos poucos",
      "Faça uma massa lisa",
      "Modele as coxinhas com o recheio",
      "Passe na farinha de rosca",
      "Frite até dourar"
    ],
    nutritionInfo: {
      calories: 150,
      protein: 10,
      carbs: 18,
      fat: 5
    },
    tags: ["salgado", "frito", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "19",
    title: "Brigadeiro de Chocolate",
    description: "Doce brasileiro cremoso feito com leite condensado sem lactose",
    imageUrl: "https://i.ytimg.com/vi/LcaOVowHJqk/maxresdefault.jpg",
    prepTime: 20,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "1 lata de leite condensado sem lactose",
      "3 colheres de sopa de cacau em pó",
      "1 colher de sopa de margarina sem lactose",
      "Chocolate granulado para decorar"
    ],
    instructions: [
      "Misture todos os ingredientes em uma panela",
      "Cozinhe em fogo médio mexendo sempre",
      "Cozinhe até desgrudar do fundo",
      "Deixe esfriar",
      "Enrole em bolinhas",
      "Passe no granulado"
    ],
    nutritionInfo: {
      calories: 80,
      protein: 1,
      carbs: 14,
      fat: 2
    },
    tags: ["doce", "sobremesa", "brasileiro", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "20",
    title: "Bolo de Chocolate Vegano",
    description: "Bolo fofinho e intenso de chocolate",
    imageUrl: "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-bolo-vegano-chocolate.jpg?quality=70&strip=info&w=620",
    prepTime: 45,
    servings: 10,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 e 3/4 xícara de açúcar",
      "3/4 xícara de cacau em pó",
      "2 colheres de chá de fermento",
      "1 colher de chá de bicarbonato",
      "2 xícaras de leite vegetal",
      "1/2 xícara de óleo",
      "2 colheres de chá de essência de baunilha"
    ],
    instructions: [
      "Misture todos os ingredientes secos",
      "Adicione os líquidos e misture bem",
      "Despeje em forma untada",
      "Asse por 35-40 minutos a 180°C",
      "Deixe esfriar antes de desenformar"
    ],
    nutritionInfo: {
      calories: 340,
      protein: 5,
      carbs: 58,
      fat: 12
    },
    tags: ["bolo", "sobremesa", "vegano", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "21",
    title: "Suco de Laranja com Morango",
    description: "Suco refrescante e rico em vitamina C",
    imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "4 laranjas",
      "10 morangos",
      "Açúcar ou mel a gosto",
      "Gelo"
    ],
    instructions: [
      "Esprema as laranjas",
      "Bata com morangos no liquidificador",
      "Adoce se necessário",
      "Sirva com gelo"
    ],
    nutritionInfo: {
      calories: 120,
      protein: 2,
      carbs: 28,
      fat: 0
    },
    tags: ["suco", "frutas", "saudável"],
    isLactoseFree: true
  },
  {
    id: "22",
    title: "Pastel de Forno Integral",
    description: "Salgado assado com massa integral crocante",
    imageUrl: "https://images.unsplash.com/photo-1534939268332-82f0c21b6e00?w=800&q=80",
    prepTime: 50,
    servings: 15,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha integral",
      "1 xícara de farinha branca",
      "1/2 xícara de óleo",
      "1 xícara de água morna",
      "1 colher de chá de sal",
      "Recheio: carne moída temperada ou frango"
    ],
    instructions: [
      "Misture as farinhas e sal",
      "Adicione óleo e água",
      "Sove até ficar homogênea",
      "Abra a massa fina",
      "Corte círculos e recheie",
      "Feche e asse a 200°C por 20 minutos"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 8,
      carbs: 24,
      fat: 6
    },
    tags: ["salgado", "assado", "integral"],
    isLactoseFree: true
  },
  {
    id: "23",
    title: "Beijinho de Coco",
    description: "Doce brasileiro tradicional com coco ralado",
    imageUrl: "https://images.unsplash.com/photo-1587241321921-91eba572c6e3?w=800&q=80",
    prepTime: 25,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "1 lata de leite condensado sem lactose",
      "1 colher de sopa de margarina sem lactose",
      "100g de coco ralado",
      "Coco ralado para decorar",
      "Cravos da índia"
    ],
    instructions: [
      "Misture leite condensado, margarina e coco",
      "Cozinhe em fogo médio mexendo sempre",
      "Cozinhe até desgrudar",
      "Deixe esfriar",
      "Enrole e passe no coco",
      "Decore com cravo"
    ],
    nutritionInfo: {
      calories: 75,
      protein: 1,
      carbs: 12,
      fat: 3
    },
    tags: ["doce", "sobremesa", "brasileiro", "coco"],
    isLactoseFree: true
  },
  {
    id: "24",
    title: "Bolo de Limão com Papoula",
    description: "Bolo úmido e aromático com toque cítrico",
    imageUrl: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&q=80",
    prepTime: 55,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "3 ovos",
      "1/2 xícara de óleo",
      "1 xícara de leite de amêndoas",
      "Raspas de 2 limões",
      "Suco de 1 limão",
      "2 colheres de sopa de sementes de papoula",
      "1 colher de sopa de fermento"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione óleo, leite e suco de limão",
      "Misture farinha, raspas e papoula",
      "Adicione fermento",
      "Asse em forma untada a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 310,
      protein: 5,
      carbs: 48,
      fat: 12
    },
    tags: ["bolo", "sobremesa", "limão"],
    isLactoseFree: true
  },
  {
    id: "25",
    title: "Suco de Melancia com Hortelã",
    description: "Suco super refrescante para dias quentes",
    imageUrl: "https://images.unsplash.com/photo-1546173159-315724a31696?w=800&q=80",
    prepTime: 5,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "4 xícaras de melancia picada",
      "Folhas de hortelã",
      "Suco de 1 limão",
      "Gelo"
    ],
    instructions: [
      "Bata a melancia no liquidificador",
      "Adicione hortelã e limão",
      "Coe se preferir",
      "Sirva com gelo"
    ],
    nutritionInfo: {
      calories: 60,
      protein: 1,
      carbs: 15,
      fat: 0
    },
    tags: ["suco", "refrescante", "vegano"],
    isLactoseFree: true
  },
  {
    id: "26",
    title: "Empada de Palmito",
    description: "Empada cremosa com recheio de palmito",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 60,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "100ml óleo vegetal",
      "1/2 xícara de água",
      "Recheio: 300g palmito, 1 cebola, 2 tomates, temperos",
      "Sal a gosto"
    ],
    instructions: [
      "Prepare a massa misturando farinha, óleo, água e sal",
      "Refogue o recheio: cebola, tomate e palmito",
      "Forre forminhas com a massa",
      "Recheie",
      "Cubra com mais massa",
      "Asse a 180°C por 30 minutos"
    ],
    nutritionInfo: {
      calories: 210,
      protein: 4,
      carbs: 28,
      fat: 10
    },
    tags: ["salgado", "assado", "vegano"],
    isLactoseFree: true
  },
  {
    id: "27",
    title: "Cocada Cremosa",
    description: "Doce tradicional de coco cremoso e delicioso",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    prepTime: 30,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "500g coco ralado fresco",
      "2 xícaras de açúcar",
      "1 xícara de água",
      "1 pitada de sal"
    ],
    instructions: [
      "Faça uma calda com açúcar e água",
      "Adicione o coco ralado",
      "Cozinhe mexendo até engrossar",
      "Despeje em forma untada",
      "Deixe esfriar e corte em quadrados"
    ],
    nutritionInfo: {
      calories: 140,
      protein: 1,
      carbs: 20,
      fat: 7
    },
    tags: ["doce", "sobremesa", "coco", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "28",
    title: "Bolo Red Velvet Vegano",
    description: "Bolo vermelho aveludado com cobertura de cream cheese vegano",
    imageUrl: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=800&q=80",
    prepTime: 65,
    servings: 12,
    difficulty: "difícil",
    ingredients: [
      "2 e 1/2 xícaras de farinha",
      "1 e 1/2 xícara de açúcar",
      "1 xícara de leite vegetal",
      "1/2 xícara de óleo",
      "2 colheres de cacau",
      "Corante vermelho natural (beterraba)",
      "1 colher de sopa de fermento",
      "Cobertura: cream cheese vegano, açúcar de confeiteiro"
    ],
    instructions: [
      "Misture ingredientes secos",
      "Combine líquidos e corante",
      "Una tudo delicadamente",
      "Asse em duas formas por 30 minutos a 180°C",
      "Prepare cobertura batendo cream cheese vegano com açúcar",
      "Monte intercalando camadas"
    ],
    nutritionInfo: {
      calories: 420,
      protein: 5,
      carbs: 62,
      fat: 18
    },
    tags: ["bolo", "sobremesa", "vegano", "festa"],
    isLactoseFree: true
  },
  {
    id: "29",
    title: "Suco de Abacaxi com Gengibre",
    description: "Suco digestivo e anti-inflamatório",
    imageUrl: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=800&q=80",
    prepTime: 10,
    servings: 3,
    difficulty: "fácil",
    ingredients: [
      "1/2 abacaxi maduro",
      "2cm de gengibre",
      "500ml de água filtrada",
      "Folhas de hortelã",
      "Mel a gosto"
    ],
    instructions: [
      "Descasque e corte o abacaxi",
      "Bata com gengibre e água",
      "Coe",
      "Adoce com mel",
      "Sirva com hortelã e gelo"
    ],
    nutritionInfo: {
      calories: 85,
      protein: 1,
      carbs: 20,
      fat: 0
    },
    tags: ["suco", "digestivo", "saudável"],
    isLactoseFree: true
  },
  {
    id: "30",
    title: "Esfiha de Carne Assada",
    description: "Esfiha árabe tradicional com massa macia",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    prepTime: 90,
    servings: 20,
    difficulty: "médio",
    ingredients: [
      "500g farinha de trigo",
      "1 xícara de água morna",
      "10g fermento biológico",
      "3 colheres de óleo",
      "Recheio: 300g carne moída, cebola, tomate, temperos"
    ],
    instructions: [
      "Dissolva fermento na água morna",
      "Misture com farinha, óleo e sal",
      "Sove e deixe crescer por 1 hora",
      "Prepare o recheio refogando carne com cebola e tomate",
      "Abra discos de massa",
      "Recheie e modele",
      "Asse a 200°C por 15-20 minutos"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 9,
      carbs: 26,
      fat: 5
    },
    tags: ["salgado", "árabe", "assado"],
    isLactoseFree: true
  },
  {
    id: "31",
    title: "Paçoca Caseira",
    description: "Doce de amendoim tradicional brasileiro",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 15,
    servings: 15,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de amendoim torrado",
      "1 xícara de açúcar",
      "1/2 xícara de farinha de mandioca",
      "1 pitada de sal"
    ],
    instructions: [
      "Triture o amendoim no processador",
      "Adicione açúcar, farinha e sal",
      "Processe até formar uma farofa úmida",
      "Pressione em forminhas",
      "Desenforme e sirva"
    ],
    nutritionInfo: {
      calories: 160,
      protein: 5,
      carbs: 18,
      fat: 8
    },
    tags: ["doce", "amendoim", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "32",
    title: "Bolo de Fubá Cremoso",
    description: "Bolo tradicional brasileiro úmido e saboroso",
    imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80",
    prepTime: 50,
    servings: 10,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de fubá",
      "1 xícara de farinha de trigo",
      "2 xícaras de açúcar",
      "3 ovos",
      "1 xícara de óleo",
      "2 xícaras de leite de coco",
      "1 colher de sopa de fermento",
      "100g de coco ralado"
    ],
    instructions: [
      "Bata no liquidificador ovos, óleo, leite e açúcar",
      "Em uma tigela, misture fubá, farinha e coco",
      "Combine os líquidos aos secos",
      "Adicione fermento",
      "Asse em forma untada a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 360,
      protein: 6,
      carbs: 54,
      fat: 14
    },
    tags: ["bolo", "sobremesa", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "33",
    title: "Suco de Beterraba com Laranja",
    description: "Suco energético rico em ferro e vitaminas",
    imageUrl: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80",
    prepTime: 10,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 beterraba média",
      "3 laranjas",
      "1 cenoura",
      "1 pedaço de gengibre",
      "Mel a gosto"
    ],
    instructions: [
      "Descasque e corte a beterraba e cenoura",
      "Esprema as laranjas",
      "Bata tudo no liquidificador",
      "Coe se preferir",
      "Adoce e sirva gelado"
    ],
    nutritionInfo: {
      calories: 110,
      protein: 2,
      carbs: 26,
      fat: 0
    },
    tags: ["suco", "energético", "saudável"],
    isLactoseFree: true
  },
  {
    id: "34",
    title: "Quibe Assado Vegano",
    description: "Versão vegetal do clássico quibe árabe",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 70,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de trigo para quibe",
      "2 xícaras de PTS (proteína de soja)",
      "1 cebola grande",
      "Hortelã, sal, pimenta",
      "Recheio: cebola, tomate, amendoim",
      "Azeite para untar"
    ],
    instructions: [
      "Hidrate o trigo e a PTS separadamente",
      "Processe a PTS com trigo, cebola e temperos",
      "Prepare o recheio refogando ingredientes",
      "Forre forma com metade da massa",
      "Adicione recheio e cubra",
      "Asse a 200°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 220,
      protein: 12,
      carbs: 32,
      fat: 6
    },
    tags: ["salgado", "árabe", "vegano", "assado"],
    isLactoseFree: true
  },
  {
    id: "35",
    title: "Pudim de Chia com Frutas",
    description: "Sobremesa saudável e nutritiva",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    prepTime: 240,
    servings: 4,
    difficulty: "fácil",
    ingredients: [
      "4 colheres de sopa de chia",
      "2 xícaras de leite de coco",
      "2 colheres de mel ou xarope",
      "1 colher de chá de baunilha",
      "Frutas frescas variadas",
      "Granola para decorar"
    ],
    instructions: [
      "Misture chia, leite, mel e baunilha",
      "Deixe na geladeira por 4 horas ou overnight",
      "Mexa ocasionalmente nos primeiros 30 minutos",
      "Sirva em taças",
      "Decore com frutas e granola"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 4,
      carbs: 22,
      fat: 9
    },
    tags: ["doce", "sobremesa", "saudável", "vegano"],
    isLactoseFree: true
  },
  {
    id: "36",
    title: "Bolo de Banana Integral",
    description: "Bolo nutritivo e saboroso para qualquer hora",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    prepTime: 50,
    servings: 10,
    difficulty: "fácil",
    ingredients: [
      "3 bananas bem maduras",
      "2 xícaras de farinha integral",
      "1/2 xícara de açúcar demerara",
      "3 ovos",
      "1/2 xícara de óleo de coco",
      "1 colher de sopa de fermento",
      "1 colher de chá de canela"
    ],
    instructions: [
      "Amasse as bananas",
      "Bata com ovos, açúcar e óleo",
      "Adicione farinha e canela",
      "Misture o fermento",
      "Asse em forma untada a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 6,
      carbs: 42,
      fat: 11
    },
    tags: ["bolo", "integral", "saudável"],
    isLactoseFree: true
  },
  {
    id: "37",
    title: "Smoothie de Frutas Vermelhas",
    description: "Bebida antioxidante e refrescante",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 xícara de morangos",
      "1/2 xícara de mirtilos",
      "1/2 xícara de framboesas",
      "1 banana",
      "1 xícara de leite de amêndoas",
      "1 colher de mel"
    ],
    instructions: [
      "Lave todas as frutas",
      "Bata tudo no liquidificador",
      "Ajuste consistência com mais leite se necessário",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 150,
      protein: 3,
      carbs: 32,
      fat: 2
    },
    tags: ["suco", "smoothie", "frutas", "saudável"],
    isLactoseFree: true
  },
  {
    id: "38",
    title: "Pão de Queijo Vegano",
    description: "Versão sem lactose do clássico brasileiro",
    imageUrl: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&q=80",
    prepTime: 35,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "500g polvilho azedo",
      "1 xícara de óleo",
      "1 xícara de água",
      "1 xícara de leite vegetal",
      "2 colheres de chá de sal",
      "Queijo vegano ralado (opcional)"
    ],
    instructions: [
      "Ferva água, leite, óleo e sal",
      "Despeje sobre o polvilho",
      "Misture bem até esfriar",
      "Adicione queijo vegano se desejar",
      "Modele bolinhas",
      "Asse a 180°C por 25 minutos"
    ],
    nutritionInfo: {
      calories: 140,
      protein: 1,
      carbs: 18,
      fat: 7
    },
    tags: ["salgado", "brasileiro", "vegano"],
    isLactoseFree: true
  },
  {
    id: "39",
    title: "Brigadeiro Gourmet de Café",
    description: "Versão sofisticada do brigadeiro com café",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 25,
    servings: 25,
    difficulty: "fácil",
    ingredients: [
      "1 lata de leite condensado sem lactose",
      "2 colheres de sopa de cacau",
      "1 colher de sopa de café solúvel",
      "1 colher de margarina sem lactose",
      "Chocolate granulado ou em pó"
    ],
    instructions: [
      "Dissolva o café em um pouco de água",
      "Misture todos os ingredientes",
      "Cozinhe mexendo sempre",
      "Deixe esfriar",
      "Enrole e passe no chocolate"
    ],
    nutritionInfo: {
      calories: 85,
      protein: 1,
      carbs: 15,
      fat: 2
    },
    tags: ["doce", "café", "gourmet", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "40",
    title: "Bolo de Maçã com Canela",
    description: "Bolo aromático perfeito para o café",
    imageUrl: "https://images.unsplash.com/photo-1587241321921-91eba572c6e3?w=800&q=80",
    prepTime: 55,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "3 maçãs",
      "2 xícaras de farinha",
      "1 e 1/2 xícara de açúcar",
      "3 ovos",
      "1/2 xícara de óleo",
      "1 xícara de leite vegetal",
      "1 colher de sopa de canela",
      "1 colher de sopa de fermento"
    ],
    instructions: [
      "Descasque e corte as maçãs em cubos",
      "Bata ovos, açúcar e óleo",
      "Adicione leite e farinha",
      "Misture as maçãs e canela",
      "Adicione fermento",
      "Asse a 180°C por 45 minutos"
    ],
    nutritionInfo: {
      calories: 290,
      protein: 4,
      carbs: 46,
      fat: 11
    },
    tags: ["bolo", "sobremesa", "frutas"],
    isLactoseFree: true
  },
  {
    id: "41",
    title: "Brownie Duplo de Chocolate",
    description: "Brownie extra chocolatudo com pedaços de chocolate",
    imageUrl: "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=800&q=80",
    prepTime: 45,
    servings: 16,
    difficulty: "fácil",
    ingredients: [
      "250g chocolate amargo sem lactose",
      "150g chocolate meio amargo picado",
      "200g açúcar",
      "4 ovos",
      "100g farinha de trigo",
      "100ml óleo de coco",
      "1 colher de chá de essência de baunilha",
      "Pitada de sal"
    ],
    instructions: [
      "Derreta 250g de chocolate com óleo",
      "Bata ovos com açúcar até ficar cremoso",
      "Misture o chocolate derretido",
      "Adicione farinha, sal e baunilha",
      "Acrescente chocolate picado",
      "Asse em forma untada a 180°C por 25-30 minutos"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 5,
      carbs: 32,
      fat: 16
    },
    tags: ["brownie", "chocolate", "sobremesa"],
    isLactoseFree: true
  },
  {
    id: "42",
    title: "Bolo de Café com Nozes",
    description: "Bolo aromático perfeito para acompanhar um café",
    imageUrl: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=800&q=80",
    prepTime: 55,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "4 ovos",
      "1 xícara de café forte frio",
      "1/2 xícara de óleo",
      "1 xícara de nozes picadas",
      "1 colher de sopa de fermento",
      "1 colher de chá de essência de baunilha"
    ],
    instructions: [
      "Bata ovos com açúcar até clarear",
      "Adicione óleo, café e baunilha",
      "Misture farinha aos poucos",
      "Adicione nozes",
      "Adicione fermento",
      "Asse a 180°C por 40-45 minutos"
    ],
    nutritionInfo: {
      calories: 320,
      protein: 6,
      carbs: 44,
      fat: 14
    },
    tags: ["bolo", "café", "sobremesa"],
    isLactoseFree: true
  },
  {
    id: "43",
    title: "Pão Caseiro Integral",
    description: "Pão macio e nutritivo feito em casa",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    prepTime: 120,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "3 xícaras de farinha integral",
      "1 xícara de farinha branca",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico seco",
      "2 colheres de sopa de açúcar",
      "2 colheres de sopa de óleo",
      "1 colher de chá de sal",
      "Sementes de linhaça e gergelim"
    ],
    instructions: [
      "Dissolva fermento e açúcar na água morna",
      "Misture farinhas e sal",
      "Adicione líquidos e óleo",
      "Sove por 10 minutos até ficar elástica",
      "Deixe crescer por 1 hora",
      "Modele, polvilhe sementes e deixe crescer mais 30 minutos",
      "Asse a 180°C por 35-40 minutos"
    ],
    nutritionInfo: {
      calories: 240,
      protein: 8,
      carbs: 45,
      fat: 4
    },
    tags: ["pão", "integral", "caseiro"],
    isLactoseFree: true
  },
  {
    id: "44",
    title: "Pão de Batata Doce",
    description: "Pão macio e levemente adocicado",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 150,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "500g farinha de trigo",
      "2 batatas doces médias cozidas",
      "1 xícara de água morna",
      "10g fermento biológico",
      "3 colheres de sopa de açúcar",
      "3 colheres de sopa de óleo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Amasse as batatas ainda mornas",
      "Dissolva fermento e açúcar na água",
      "Misture farinha, sal e batata",
      "Adicione líquidos e óleo",
      "Sove bem",
      "Deixe crescer por 1 hora",
      "Modele e deixe crescer mais 45 minutos",
      "Asse a 180°C por 30-35 minutos"
    ],
    nutritionInfo: {
      calories: 260,
      protein: 7,
      carbs: 48,
      fat: 5
    },
    tags: ["pão", "caseiro", "batata doce"],
    isLactoseFree: true
  },
  {
    id: "45",
    title: "Enroladinho de Salsicha",
    description: "Salgado clássico de festa perfeito para lanches",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 40,
    servings: 15,
    difficulty: "fácil",
    ingredients: [
      "1 pacote de massa folhada sem lactose",
      "15 salsichas",
      "1 gema de ovo",
      "Gergelim para polvilhar",
      "Ketchup para servir"
    ],
    instructions: [
      "Abra a massa folhada",
      "Corte em tiras",
      "Enrole cada salsicha",
      "Pincele com gema",
      "Polvilhe gergelim",
      "Asse a 200°C por 20 minutos até dourar"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 7,
      carbs: 16,
      fat: 10
    },
    tags: ["salgado", "lanche", "festa"],
    isLactoseFree: true
  },
  {
    id: "46",
    title: "Bolinha de Queijo Vegano",
    description: "Salgado crocante recheado com queijo vegetal",
    imageUrl: "https://images.unsplash.com/photo-1534939268332-82f0c21b6e00?w=800&q=80",
    prepTime: 50,
    servings: 25,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de água",
      "3 colheres de sopa de óleo",
      "1 colher de chá de sal",
      "200g queijo vegano",
      "Farinha de rosca",
      "Óleo para fritar"
    ],
    instructions: [
      "Ferva água com óleo e sal",
      "Adicione farinha de uma vez",
      "Misture bem até formar massa",
      "Deixe esfriar",
      "Modele bolinhas com queijo no centro",
      "Passe na farinha de rosca",
      "Frite até dourar"
    ],
    nutritionInfo: {
      calories: 120,
      protein: 3,
      carbs: 15,
      fat: 6
    },
    tags: ["salgado", "frito", "vegano"],
    isLactoseFree: true
  },
  {
    id: "47",
    title: "Quindim Tradicional",
    description: "Doce brasileiro clássico de coco e gemas",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    prepTime: 60,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "10 gemas",
      "1 xícara de açúcar",
      "200g coco ralado",
      "50ml água",
      "Margarina sem lactose para untar"
    ],
    instructions: [
      "Bata as gemas com açúcar",
      "Adicione coco e água",
      "Misture bem",
      "Unte forminhas individuais",
      "Distribua a massa",
      "Asse em banho-maria a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 3,
      carbs: 24,
      fat: 9
    },
    tags: ["doce", "sobremesa", "brasileiro", "coco"],
    isLactoseFree: true
  },
  {
    id: "48",
    title: "Olho de Sogra",
    description: "Doce de ameixa seca com coco",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 30,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "20 ameixas secas sem caroço",
      "1 lata de leite condensado sem lactose",
      "1 colher de sopa de margarina sem lactose",
      "200g coco ralado",
      "Coco ralado para decorar"
    ],
    instructions: [
      "Cozinhe leite condensado e margarina",
      "Adicione coco ralado",
      "Cozinhe até desgrudar",
      "Deixe esfriar",
      "Envolva cada ameixa com a massa",
      "Passe no coco ralado"
    ],
    nutritionInfo: {
      calories: 110,
      protein: 1,
      carbs: 18,
      fat: 4
    },
    tags: ["doce", "sobremesa", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "49",
    title: "Biscoito de Aveia e Banana",
    description: "Biscoito saudável com apenas 3 ingredientes",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    prepTime: 25,
    servings: 15,
    difficulty: "fácil",
    ingredients: [
      "2 bananas maduras",
      "1 xícara de aveia em flocos",
      "1/2 xícara de passas ou gotas de chocolate sem lactose",
      "1 colher de chá de canela",
      "Pitada de sal"
    ],
    instructions: [
      "Amasse as bananas",
      "Misture com aveia e canela",
      "Adicione passas ou chocolate",
      "Modele pequenas porções",
      "Disponha em assadeira",
      "Asse a 180°C por 15-18 minutos"
    ],
    nutritionInfo: {
      calories: 80,
      protein: 2,
      carbs: 16,
      fat: 1
    },
    tags: ["biscoito", "saudável", "lanche"],
    isLactoseFree: true
  },
  {
    id: "50",
    title: "Biscoito Amanteigado Vegano",
    description: "Biscoito crocante e delicioso sem lactose",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    prepTime: 35,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "150g margarina vegana",
      "1 ovo",
      "1 colher de chá de essência de baunilha",
      "1 pitada de sal"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione ovo e baunilha",
      "Misture farinha e sal",
      "Faça uma massa",
      "Abra e corte formatos",
      "Asse a 180°C por 12-15 minutos"
    ],
    nutritionInfo: {
      calories: 95,
      protein: 1,
      carbs: 14,
      fat: 4
    },
    tags: ["biscoito", "lanche", "vegano"],
    isLactoseFree: true
  },
  {
    id: "51",
    title: "Vitamina de Banana com Aveia",
    description: "Bebida nutritiva e energética para o café da manhã",
    imageUrl: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 bananas",
      "2 colheres de sopa de aveia",
      "400ml leite de amêndoas",
      "1 colher de sopa de mel",
      "1 colher de chá de canela",
      "Gelo"
    ],
    instructions: [
      "Bata todos os ingredientes no liquidificador",
      "Ajuste consistência",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 220,
      protein: 4,
      carbs: 44,
      fat: 3
    },
    tags: ["vitamina", "saudável", "café da manhã"],
    isLactoseFree: true
  },
  {
    id: "52",
    title: "Vitamina de Abacate com Cacau",
    description: "Vitamina cremosa e nutritiva rica em gorduras boas",
    imageUrl: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 abacate maduro",
      "2 colheres de sopa de cacau em pó",
      "400ml leite de coco",
      "2 colheres de sopa de mel ou xarope",
      "1 colher de chá de baunilha",
      "Gelo"
    ],
    instructions: [
      "Bata todos os ingredientes até ficar cremoso",
      "Ajuste doçura",
      "Sirva gelado"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 4,
      carbs: 28,
      fat: 18
    },
    tags: ["vitamina", "chocolate", "saudável"],
    isLactoseFree: true
  },
  {
    id: "53",
    title: "Bolo de Chocolate com Beterraba",
    description: "Bolo úmido com vegetais escondidos",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    prepTime: 60,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 beterrabas médias cozidas",
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "3/4 xícara de cacau em pó",
      "3 ovos",
      "1 xícara de óleo",
      "1 colher de sopa de fermento"
    ],
    instructions: [
      "Bata beterrabas com ovos e óleo",
      "Misture ingredientes secos",
      "Combine tudo",
      "Adicione fermento",
      "Asse a 180°C por 40-45 minutos"
    ],
    nutritionInfo: {
      calories: 310,
      protein: 5,
      carbs: 46,
      fat: 13
    },
    tags: ["bolo", "chocolate", "saudável"],
    isLactoseFree: true
  },
  {
    id: "54",
    title: "Pão de Forma Sem Lactose",
    description: "Pão macio perfeito para sanduíches",
    imageUrl: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=800&q=80",
    prepTime: 150,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/2 xícara de leite vegetal morno",
      "10g fermento biológico",
      "3 colheres de sopa de açúcar",
      "3 colheres de sopa de óleo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Dissolva fermento e açúcar no leite",
      "Adicione óleo",
      "Misture farinha e sal",
      "Sove por 10 minutos",
      "Deixe crescer por 1 hora",
      "Modele em forma de pão",
      "Deixe crescer mais 40 minutos",
      "Asse a 180°C por 30-35 minutos"
    ],
    nutritionInfo: {
      calories: 200,
      protein: 6,
      carbs: 38,
      fat: 3
    },
    tags: ["pão", "caseiro", "forma"],
    isLactoseFree: true
  },
  {
    id: "55",
    title: "Esfirra de Espinafre",
    description: "Salgado árabe com recheio vegetal",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 90,
    servings: 18,
    difficulty: "médio",
    ingredients: [
      "500g farinha de trigo",
      "1 xícara de água morna",
      "10g fermento biológico",
      "Óleo e sal",
      "Recheio: 300g espinafre, cebola, tomate, suco de limão"
    ],
    instructions: [
      "Prepare massa e deixe crescer",
      "Refogue espinafre com temperos",
      "Abra discos de massa",
      "Recheie e modele",
      "Asse a 200°C por 15-20 minutos"
    ],
    nutritionInfo: {
      calories: 160,
      protein: 5,
      carbs: 28,
      fat: 3
    },
    tags: ["salgado", "árabe", "vegano"],
    isLactoseFree: true
  },
  {
    id: "56",
    title: "Brownie de Nozes e Caramelo",
    description: "Brownie gourmet com camadas de sabor",
    imageUrl: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80",
    prepTime: 50,
    servings: 16,
    difficulty: "médio",
    ingredients: [
      "200g chocolate amargo",
      "150g açúcar mascavo",
      "4 ovos",
      "100g farinha",
      "100ml óleo de coco",
      "1 xícara de nozes picadas",
      "Caramelo vegano para decorar"
    ],
    instructions: [
      "Derreta chocolate com óleo",
      "Bata ovos com açúcar",
      "Combine tudo",
      "Adicione farinha e nozes",
      "Asse por 30 minutos",
      "Decore com caramelo"
    ],
    nutritionInfo: {
      calories: 290,
      protein: 5,
      carbs: 30,
      fat: 18
    },
    tags: ["brownie", "gourmet", "nozes"],
    isLactoseFree: true
  },
  {
    id: "57",
    title: "Biscoito de Polvilho (Biscoito de Queijo)",
    description: "Biscoito crocante e leve perfeito para lanches",
    imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
    prepTime: 40,
    servings: 40,
    difficulty: "fácil",
    ingredients: [
      "500g polvilho azedo",
      "1 xícara de óleo",
      "1 xícara de água",
      "2 ovos",
      "2 colheres de chá de sal",
      "Queijo vegano ralado (opcional)"
    ],
    instructions: [
      "Ferva água com óleo e sal",
      "Despeje sobre polvilho",
      "Deixe esfriar",
      "Adicione ovos e queijo",
      "Modele bolinhas pequenas",
      "Asse a 180°C por 25-30 minutos"
    ],
    nutritionInfo: {
      calories: 80,
      protein: 1,
      carbs: 10,
      fat: 4
    },
    tags: ["biscoito", "lanche", "crocante"],
    isLactoseFree: true
  },
  {
    id: "58",
    title: "Vitamina Verde Energética",
    description: "Vitamina detox cheia de nutrientes",
    imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 maçã verde",
      "1 banana",
      "1 folha de couve",
      "1 pedaço de gengibre",
      "300ml água de coco",
      "Suco de 1/2 limão",
      "1 colher de sopa de chia"
    ],
    instructions: [
      "Lave bem os ingredientes",
      "Bata tudo no liquidificador",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 140,
      protein: 3,
      carbs: 30,
      fat: 2
    },
    tags: ["vitamina", "detox", "verde", "saudável"],
    isLactoseFree: true
  },
  {
    id: "59",
    title: "Pão Australiano Sem Lactose",
    description: "Pão escuro e macio com mel",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 140,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha integral",
      "2 xícaras de farinha branca",
      "1/4 xícara de cacau em pó",
      "1/4 xícara de mel",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "3 colheres de sopa de óleo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Dissolva fermento e mel na água",
      "Misture farinhas, cacau e sal",
      "Combine líquidos e secos",
      "Sove bem",
      "Deixe crescer 1 hora",
      "Modele e deixe crescer mais 40 minutos",
      "Asse a 180°C por 35 minutos"
    ],
    nutritionInfo: {
      calories: 270,
      protein: 8,
      carbs: 50,
      fat: 5
    },
    tags: ["pão", "caseiro", "mel"],
    isLactoseFree: true
  },
  {
    id: "60",
    title: "Risoles de Palmito",
    description: "Salgado tradicional brasileiro crocante",
    imageUrl: "https://images.unsplash.com/photo-1534939268332-82f0c21b6e00?w=800&q=80",
    prepTime: 70,
    servings: 20,
    difficulty: "médio",
    ingredients: [
      "Massa: 2 xícaras farinha, 2 xícaras leite vegetal, margarina, sal",
      "Recheio: 300g palmito, 1 cebola, 2 tomates, temperos",
      "Farinha de rosca para empanar",
      "Óleo para fritar"
    ],
    instructions: [
      "Prepare a massa: ferva leite com margarina e sal, adicione farinha",
      "Refogue o recheio",
      "Deixe massa esfriar",
      "Recheie e modele os risoles",
      "Passe na farinha de rosca",
      "Frite até dourar"
    ],
    nutritionInfo: {
      calories: 150,
      protein: 4,
      carbs: 20,
      fat: 6
    },
    tags: ["salgado", "frito", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "61",
    title: "Brownie de Pistache",
    description: "Brownie sofisticado com pistaches e chocolate branco vegano",
    imageUrl: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80",
    prepTime: 50,
    servings: 16,
    difficulty: "médio",
    ingredients: [
      "200g chocolate amargo sem lactose",
      "100g chocolate branco vegano",
      "4 ovos",
      "150g açúcar",
      "100g farinha de trigo",
      "100ml óleo de coco",
      "1 xícara de pistaches picados",
      "1 colher de chá de baunilha"
    ],
    instructions: [
      "Derreta chocolate amargo com óleo",
      "Bata ovos com açúcar até ficar cremoso",
      "Misture chocolate derretido",
      "Adicione farinha e baunilha",
      "Acrescente metade dos pistaches",
      "Despeje na forma e polvilhe chocolate branco e pistaches",
      "Asse a 180°C por 28-32 minutos"
    ],
    nutritionInfo: {
      calories: 295,
      protein: 6,
      carbs: 30,
      fat: 18
    },
    tags: ["brownie", "gourmet", "pistache"],
    isLactoseFree: true
  },
  {
    id: "62",
    title: "Bolo Nega Maluca Vegano",
    description: "Bolo de chocolate super úmido e fofinho",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    prepTime: 50,
    servings: 14,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "1 xícara de cacau em pó",
      "1 xícara de água fervente",
      "1 xícara de leite vegetal",
      "3/4 xícara de óleo",
      "3 ovos",
      "1 colher de sopa de fermento",
      "Cobertura: 200g chocolate meio amargo, 3 colheres óleo coco"
    ],
    instructions: [
      "Misture ingredientes secos",
      "Bata ovos, óleo e leite",
      "Adicione água fervente por último",
      "Misture tudo delicadamente",
      "Adicione fermento",
      "Asse a 180°C por 40 minutos",
      "Cubra com ganache de chocolate"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 6,
      carbs: 56,
      fat: 16
    },
    tags: ["bolo", "chocolate", "sobremesa"],
    isLactoseFree: true
  },
  {
    id: "63",
    title: "Pão de Alho Caseiro",
    description: "Pão macio com manteiga de alho sem lactose",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 120,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "2 colheres de açúcar",
      "1 colher de chá de sal",
      "Cobertura: 100g margarina vegana, 5 dentes de alho, salsinha"
    ],
    instructions: [
      "Prepare massa básica de pão",
      "Sove e deixe crescer 1 hora",
      "Modele e faça cortes",
      "Misture margarina com alho e salsinha",
      "Pincele e deixe crescer 30 minutos",
      "Asse a 180°C por 30 minutos"
    ],
    nutritionInfo: {
      calories: 320,
      protein: 8,
      carbs: 52,
      fat: 9
    },
    tags: ["pão", "alho", "caseiro"],
    isLactoseFree: true
  },
  {
    id: "64",
    title: "Mini Churros Assados",
    description: "Salgado crocante em formato de churros",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    prepTime: 45,
    servings: 25,
    difficulty: "médio",
    ingredients: [
      "1 xícara de água",
      "3 colheres de margarina vegana",
      "1 xícara de farinha de trigo",
      "2 ovos",
      "Sal a gosto",
      "Orégano e gergelim"
    ],
    instructions: [
      "Ferva água com margarina e sal",
      "Adicione farinha de uma vez",
      "Mexa até formar massa",
      "Deixe esfriar e adicione ovos",
      "Coloque em saco de confeitar",
      "Faça churros pequenos em assadeira",
      "Polvilhe orégano e gergelim",
      "Asse a 200°C por 20-25 minutos"
    ],
    nutritionInfo: {
      calories: 65,
      protein: 2,
      carbs: 8,
      fat: 3
    },
    tags: ["salgado", "lanche", "assado"],
    isLactoseFree: true
  },
  {
    id: "65",
    title: "Doce de Leite Vegano",
    description: "Doce cremoso feito com leite de coco",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 90,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "2 latas de leite de coco",
      "2 xícaras de açúcar",
      "1 colher de chá de baunilha",
      "1 pitada de sal",
      "1 colher de chá de amido de milho"
    ],
    instructions: [
      "Misture todos os ingredientes",
      "Cozinhe em fogo médio-baixo",
      "Mexa constantemente",
      "Cozinhe por cerca de 1 hora até engrossar",
      "Deixe esfriar",
      "Guarde em pote de vidro"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 1,
      carbs: 36,
      fat: 4
    },
    tags: ["doce", "vegano", "cremoso"],
    isLactoseFree: true
  },
  {
    id: "66",
    title: "Cookies de Chocolate Chip",
    description: "Biscoitos americanos clássicos com gotas de chocolate",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    prepTime: 30,
    servings: 24,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar mascavo",
      "1/2 xícara de açúcar branco",
      "150g margarina vegana",
      "2 ovos",
      "1 colher de chá de baunilha",
      "1 colher de chá de fermento",
      "1/2 colher de chá de bicarbonato",
      "200g gotas de chocolate sem lactose"
    ],
    instructions: [
      "Bata margarina com açúcares",
      "Adicione ovos e baunilha",
      "Misture farinha, fermento e bicarbonato",
      "Adicione gotas de chocolate",
      "Faça bolinhas e achate levemente",
      "Asse a 180°C por 12-15 minutos"
    ],
    nutritionInfo: {
      calories: 165,
      protein: 2,
      carbs: 24,
      fat: 7
    },
    tags: ["biscoito", "chocolate", "americano"],
    isLactoseFree: true
  },
  {
    id: "67",
    title: "Vitamina Tropical Energizante",
    description: "Bebida refrescante com frutas tropicais",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 manga madura",
      "1/2 abacaxi",
      "1 banana",
      "1 maracujá",
      "300ml água de coco",
      "Hortelã fresca",
      "Gelo"
    ],
    instructions: [
      "Descasque e corte as frutas",
      "Bata tudo no liquidificador",
      "Adicione hortelã",
      "Sirva gelado"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 2,
      carbs: 44,
      fat: 1
    },
    tags: ["vitamina", "tropical", "refrescante"],
    isLactoseFree: true
  },
  {
    id: "68",
    title: "Bolo de Laranja Molhadinho",
    description: "Bolo úmido com calda de laranja",
    imageUrl: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&q=80",
    prepTime: 60,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "3 ovos",
      "1 xícara de suco de laranja",
      "1/2 xícara de óleo",
      "Raspas de 2 laranjas",
      "1 colher de sopa de fermento",
      "Calda: 1 xícara de suco de laranja, 1/2 xícara de açúcar"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione óleo, suco e raspas",
      "Misture farinha aos poucos",
      "Adicione fermento",
      "Asse a 180°C por 40 minutos",
      "Faça furos no bolo ainda quente",
      "Despeje calda fervente por cima"
    ],
    nutritionInfo: {
      calories: 310,
      protein: 5,
      carbs: 54,
      fat: 9
    },
    tags: ["bolo", "laranja", "molhadinho"],
    isLactoseFree: true
  },
  {
    id: "69",
    title: "Pão Italiano Rústico",
    description: "Pão crocante por fora e macio por dentro",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    prepTime: 180,
    servings: 1,
    difficulty: "difícil",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 3/4 xícara de água morna",
      "7g fermento biológico seco",
      "2 colheres de chá de sal",
      "1 colher de chá de açúcar",
      "2 colheres de sopa de azeite"
    ],
    instructions: [
      "Dissolva fermento e açúcar na água",
      "Misture farinha e sal",
      "Adicione água e azeite",
      "Sove por 15 minutos",
      "Deixe crescer 2 horas",
      "Modele e faça cortes",
      "Deixe crescer mais 30 minutos",
      "Asse com vapor a 220°C por 30-35 minutos"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 5,
      carbs: 36,
      fat: 2
    },
    tags: ["pão", "italiano", "artesanal"],
    isLactoseFree: true
  },
  {
    id: "70",
    title: "Kibe de Bandeja Assado",
    description: "Kibe tradicional assado perfeito para almoço",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 80,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de trigo para kibe",
      "500g carne moída",
      "1 cebola grande",
      "Hortelã, sal, pimenta",
      "Recheio: 300g carne moída, cebola, tomate, pinhões",
      "Azeite para regar"
    ],
    instructions: [
      "Hidrate o trigo",
      "Processe carne com trigo, cebola e temperos",
      "Prepare recheio refogando ingredientes",
      "Forre forma com metade da massa",
      "Adicione recheio",
      "Cubra com restante da massa",
      "Faça losangos e regue com azeite",
      "Asse a 200°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 18,
      carbs: 28,
      fat: 10
    },
    tags: ["salgado", "árabe", "assado"],
    isLactoseFree: true
  },
  {
    id: "71",
    title: "Trufas de Chocolate e Café",
    description: "Doce sofisticado perfeito para presentear",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 120,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "300g chocolate meio amargo sem lactose",
      "200ml creme de leite de coco",
      "2 colheres de café solúvel",
      "1 colher de sopa de margarina vegana",
      "Cacau em pó para decorar"
    ],
    instructions: [
      "Derreta chocolate com creme de coco",
      "Adicione café e margarina",
      "Misture bem",
      "Leve à geladeira por 2 horas",
      "Modele bolinhas",
      "Passe no cacau em pó"
    ],
    nutritionInfo: {
      calories: 85,
      protein: 1,
      carbs: 8,
      fat: 6
    },
    tags: ["doce", "trufa", "chocolate", "gourmet"],
    isLactoseFree: true
  },
  {
    id: "72",
    title: "Biscoito de Gengibre Natalino",
    description: "Biscoitos aromáticos perfeitos para o Natal",
    imageUrl: "https://images.unsplash.com/photo-1481391243133-f96216dcb5d2?w=800&q=80",
    prepTime: 40,
    servings: 35,
    difficulty: "médio",
    ingredients: [
      "3 xícaras de farinha de trigo",
      "1 xícara de açúcar mascavo",
      "150g margarina vegana",
      "1 ovo",
      "1/3 xícara de mel",
      "2 colheres de chá de gengibre em pó",
      "1 colher de chá de canela",
      "1/2 colher de chá de cravo",
      "1 colher de chá de bicarbonato"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione ovo e mel",
      "Misture farinha com especiarias e bicarbonato",
      "Faça massa homogênea",
      "Deixe descansar 30 minutos",
      "Abra e corte formatos natalinos",
      "Asse a 180°C por 10-12 minutos"
    ],
    nutritionInfo: {
      calories: 95,
      protein: 1,
      carbs: 16,
      fat: 3
    },
    tags: ["biscoito", "gengibre", "natal"],
    isLactoseFree: true
  },
  {
    id: "73",
    title: "Vitamina de Manga com Maracujá",
    description: "Bebida tropical refrescante e nutritiva",
    imageUrl: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 mangas maduras",
      "Polpa de 2 maracujás",
      "300ml leite de coco",
      "1 colher de sopa de mel",
      "Gelo"
    ],
    instructions: [
      "Descasque as mangas",
      "Bata com maracujá, leite de coco e mel",
      "Ajuste doçura",
      "Sirva gelado"
    ],
    nutritionInfo: {
      calories: 210,
      protein: 2,
      carbs: 42,
      fat: 5
    },
    tags: ["vitamina", "manga", "tropical"],
    isLactoseFree: true
  },
  {
    id: "74",
    title: "Bolo Mármore Clássico",
    description: "Bolo mesclado de baunilha e chocolate",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    prepTime: 55,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "3 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "4 ovos",
      "1 xícara de leite vegetal",
      "1 xícara de óleo",
      "1 colher de sopa de fermento",
      "1 colher de sopa de essência de baunilha",
      "3 colheres de sopa de cacau em pó"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione óleo, leite e baunilha",
      "Misture farinha aos poucos",
      "Adicione fermento",
      "Divida massa em duas partes",
      "Em uma adicione cacau",
      "Intercale colheradas na forma",
      "Faça movimentos circulares com garfo",
      "Asse a 180°C por 45 minutos"
    ],
    nutritionInfo: {
      calories: 350,
      protein: 6,
      carbs: 52,
      fat: 14
    },
    tags: ["bolo", "mármore", "clássico"],
    isLactoseFree: true
  },
  {
    id: "75",
    title: "Pão de Mel Caseiro",
    description: "Docinho macio coberto com chocolate",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 45,
    servings: 20,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de mel",
      "3/4 xícara de açúcar mascavo",
      "3 ovos",
      "1/2 xícara de leite vegetal",
      "1/4 xícara de óleo",
      "1 colher de sopa de especiarias (canela, cravo)",
      "1 colher de chá de fermento",
      "300g chocolate meio amargo para cobertura"
    ],
    instructions: [
      "Bata ovos com mel e açúcar",
      "Adicione leite e óleo",
      "Misture farinha e especiarias",
      "Adicione fermento",
      "Despeje em forminhas pequenas",
      "Asse a 180°C por 15 minutos",
      "Derreta chocolate e cubra os pães"
    ],
    nutritionInfo: {
      calories: 190,
      protein: 3,
      carbs: 32,
      fat: 6
    },
    tags: ["doce", "mel", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "76",
    title: "Croissant Vegano",
    description: "Croissant folhado e crocante sem manteiga",
    imageUrl: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
    prepTime: 240,
    servings: 12,
    difficulty: "difícil",
    ingredients: [
      "500g farinha de trigo",
      "250g margarina vegana gelada",
      "250ml água morna",
      "10g fermento biológico",
      "2 colheres de sopa de açúcar",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Prepare massa e deixe descansar",
      "Lamine a margarina entre camadas de massa",
      "Faça dobras triplas (3 vezes)",
      "Descanse 30 minutos entre dobras",
      "Abra, corte triângulos e enrole",
      "Deixe crescer 2 horas",
      "Asse a 200°C por 20 minutos"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 5,
      carbs: 38,
      fat: 12
    },
    tags: ["pão", "francês", "café da manhã"],
    isLactoseFree: true
  },
  {
    id: "77",
    title: "Bolo de Churros",
    description: "Bolo com sabor de churros com canela e açúcar",
    imageUrl: "https://images.unsplash.com/photo-1587241321921-91eba572c6e3?w=800&q=80",
    prepTime: 60,
    servings: 14,
    difficulty: "médio",
    ingredients: [
      "3 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "4 ovos",
      "1 xícara de leite vegetal",
      "1 xícara de óleo",
      "2 colheres de sopa de canela",
      "1 colher de sopa de fermento",
      "Cobertura: açúcar e canela"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione óleo e leite",
      "Misture farinha e 1 colher de canela",
      "Adicione fermento",
      "Asse a 180°C por 40 minutos",
      "Ainda quente, polvilhe açúcar com canela"
    ],
    nutritionInfo: {
      calories: 330,
      protein: 5,
      carbs: 52,
      fat: 12
    },
    tags: ["bolo", "churros", "canela"],
    isLactoseFree: true
  },
  {
    id: "78",
    title: "Pão Sírio (Pita)",
    description: "Pão achatado perfeito para wraps e lanches",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 120,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "1 colher de sopa de açúcar",
      "1 colher de sopa de azeite",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Dissolva fermento e açúcar na água",
      "Adicione farinha, sal e azeite",
      "Sove por 10 minutos",
      "Deixe crescer 1 hora",
      "Divida em 8 porções e abra discos",
      "Deixe descansar 30 minutos",
      "Asse a 240°C por 5-7 minutos até inflar"
    ],
    nutritionInfo: {
      calories: 230,
      protein: 7,
      carbs: 46,
      fat: 2
    },
    tags: ["pão", "árabe", "wrap"],
    isLactoseFree: true
  },
  {
    id: "79",
    title: "Bolinho de Chuva",
    description: "Salgado frito tradicional coberto com açúcar e canela",
    imageUrl: "https://images.unsplash.com/photo-1534939268332-82f0c21b6e00?w=800&q=80",
    prepTime: 30,
    servings: 25,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "2 ovos",
      "1 xícara de leite vegetal",
      "1/2 xícara de açúcar",
      "1 colher de sopa de fermento",
      "Óleo para fritar",
      "Açúcar e canela para polvilhar"
    ],
    instructions: [
      "Bata ovos com açúcar e leite",
      "Adicione farinha aos poucos",
      "Misture fermento",
      "Aqueça óleo",
      "Frite colheradas da massa",
      "Escorra e passe no açúcar com canela"
    ],
    nutritionInfo: {
      calories: 110,
      protein: 2,
      carbs: 18,
      fat: 3
    },
    tags: ["salgado", "frito", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "80",
    title: "Palha Italiana",
    description: "Doce cremoso de chocolate com biscoito",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 120,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "1 lata de leite condensado sem lactose",
      "2 colheres de sopa de cacau",
      "1 colher de sopa de margarina vegana",
      "200g biscoito maisena triturado",
      "Chocolate granulado"
    ],
    instructions: [
      "Cozinhe leite condensado, cacau e margarina",
      "Deixe esfriar",
      "Adicione biscoito triturado",
      "Misture bem",
      "Modele bolinhas",
      "Passe no granulado",
      "Leve à geladeira por 1 hora"
    ],
    nutritionInfo: {
      calories: 125,
      protein: 2,
      carbs: 20,
      fat: 4
    },
    tags: ["doce", "chocolate", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "81",
    title: "Biscoito de Coco Crocante",
    description: "Biscoito dourado e crocante de coco",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    prepTime: 30,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de coco ralado",
      "1 xícara de açúcar",
      "150g margarina vegana",
      "1 ovo",
      "1 colher de chá de essência de baunilha"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione ovo e baunilha",
      "Misture farinha e coco",
      "Modele bolinhas e achate",
      "Asse a 180°C por 15-18 minutos"
    ],
    nutritionInfo: {
      calories: 105,
      protein: 1,
      carbs: 15,
      fat: 5
    },
    tags: ["biscoito", "coco", "crocante"],
    isLactoseFree: true
  },
  {
    id: "82",
    title: "Vitamina de Cacau com Amendoim",
    description: "Bebida proteica e energética",
    imageUrl: "https://images.unsplash.com/photo-1638176066666-ffb2f013c7dd?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 bananas",
      "2 colheres de sopa de cacau",
      "2 colheres de sopa de pasta de amendoim",
      "400ml leite de amêndoas",
      "1 colher de sopa de mel",
      "Gelo"
    ],
    instructions: [
      "Bata todos os ingredientes",
      "Ajuste consistência",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 8,
      carbs: 38,
      fat: 12
    },
    tags: ["vitamina", "proteico", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "83",
    title: "Bolo de Milho Cremoso",
    description: "Bolo tradicional úmido e saboroso",
    imageUrl: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&q=80",
    prepTime: 55,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "2 latas de milho verde",
      "3 ovos",
      "1 xícara de açúcar",
      "1/2 xícara de óleo",
      "1 xícara de fubá",
      "1/2 xícara de farinha de trigo",
      "1 colher de sopa de fermento",
      "100g coco ralado"
    ],
    instructions: [
      "Bata milho, ovos, açúcar e óleo no liquidificador",
      "Misture fubá, farinha e coco",
      "Combine tudo",
      "Adicione fermento",
      "Asse a 180°C por 40-45 minutos"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 5,
      carbs: 42,
      fat: 11
    },
    tags: ["bolo", "milho", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "84",
    title: "Pão de Centeio Integral",
    description: "Pão denso e nutritivo com grãos",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    prepTime: 150,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de centeio",
      "2 xícaras de farinha integral",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "2 colheres de sopa de mel",
      "2 colheres de sopa de óleo",
      "1 colher de chá de sal",
      "Sementes variadas"
    ],
    instructions: [
      "Dissolva fermento e mel na água",
      "Misture farinhas e sal",
      "Adicione líquidos e óleo",
      "Sove por 10 minutos",
      "Deixe crescer 1 hora",
      "Modele, polvilhe sementes",
      "Deixe crescer 45 minutos",
      "Asse a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 220,
      protein: 7,
      carbs: 42,
      fat: 4
    },
    tags: ["pão", "centeio", "integral"],
    isLactoseFree: true
  },
  {
    id: "85",
    title: "Mini Pizza de Frigideira",
    description: "Salgado rápido e prático sem forno",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    prepTime: 35,
    servings: 8,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de leite vegetal",
      "2 colheres de sopa de óleo",
      "1 colher de chá de sal",
      "1 colher de chá de fermento",
      "Molho de tomate",
      "Ingredientes para cobertura"
    ],
    instructions: [
      "Misture todos os ingredientes da massa",
      "Aqueça frigideira antiaderente",
      "Despeje porções pequenas",
      "Quando dourar, vire",
      "Adicione molho e coberturas",
      "Tampe até derreter"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 6,
      carbs: 28,
      fat: 5
    },
    tags: ["salgado", "pizza", "rápido"],
    isLactoseFree: true
  },
  {
    id: "86",
    title: "Cajuzinho Tradicional",
    description: "Doce brasileiro em formato de caju",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 30,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "1 lata de leite condensado sem lactose",
      "3 colheres de sopa de amendoim torrado moído",
      "1 colher de sopa de margarina vegana",
      "Amendoins inteiros para decorar",
      "Açúcar cristal"
    ],
    instructions: [
      "Misture leite condensado, amendoim moído e margarina",
      "Cozinhe mexendo até desgrudar",
      "Deixe esfriar",
      "Modele no formato de caju",
      "Passe no açúcar",
      "Decore com amendoim inteiro"
    ],
    nutritionInfo: {
      calories: 90,
      protein: 2,
      carbs: 15,
      fat: 3
    },
    tags: ["doce", "amendoim", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "87",
    title: "Cookies de Aveia e Chocolate",
    description: "Biscoitos saudáveis e deliciosos",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    prepTime: 25,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de aveia em flocos",
      "1 xícara de farinha de trigo",
      "1 xícara de açúcar mascavo",
      "100g margarina vegana",
      "2 ovos",
      "1 colher de chá de fermento",
      "150g gotas de chocolate sem lactose"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione ovos",
      "Misture aveia, farinha e fermento",
      "Adicione chocolate",
      "Modele bolinhas",
      "Asse a 180°C por 12-15 minutos"
    ],
    nutritionInfo: {
      calories: 145,
      protein: 3,
      carbs: 20,
      fat: 6
    },
    tags: ["biscoito", "aveia", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "88",
    title: "Vitamina de Morango com Maracujá",
    description: "Bebida refrescante e rica em vitamina C",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "15 morangos",
      "Polpa de 2 maracujás",
      "1 banana",
      "300ml leite de coco",
      "1 colher de sopa de mel",
      "Gelo"
    ],
    instructions: [
      "Lave os morangos",
      "Bata todos os ingredientes",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 170,
      protein: 2,
      carbs: 36,
      fat: 3
    },
    tags: ["vitamina", "morango", "refrescante"],
    isLactoseFree: true
  },
  {
    id: "89",
    title: "Bolo Formigueiro",
    description: "Bolo clássico com chocolate granulado na massa",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    prepTime: 50,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "3 xícaras de farinha de trigo",
      "2 xícaras de açúcar",
      "4 ovos",
      "1 xícara de leite vegetal",
      "1 xícara de óleo",
      "1 colher de sopa de fermento",
      "1 colher de sopa de essência de baunilha",
      "200g chocolate granulado"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione óleo, leite e baunilha",
      "Misture farinha aos poucos",
      "Adicione fermento",
      "Por último, adicione granulado",
      "Asse a 180°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 360,
      protein: 6,
      carbs: 58,
      fat: 13
    },
    tags: ["bolo", "chocolate", "clássico"],
    isLactoseFree: true
  },
  {
    id: "90",
    title: "Pão de Hambúrguer Artesanal",
    description: "Pão macio e perfeito para hambúrgueres",
    imageUrl: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&q=80",
    prepTime: 140,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/4 xícara de leite vegetal morno",
      "10g fermento biológico",
      "3 colheres de sopa de açúcar",
      "3 colheres de sopa de óleo",
      "1 ovo",
      "1 colher de chá de sal",
      "Gergelim para decorar"
    ],
    instructions: [
      "Dissolva fermento e açúcar no leite",
      "Adicione ovo e óleo",
      "Misture farinha e sal",
      "Sove por 10 minutos",
      "Deixe crescer 1 hora",
      "Divida em 8 porções",
      "Modele discos, pincele com ovo e polvilhe gergelim",
      "Deixe crescer 30 minutos",
      "Asse a 180°C por 15-18 minutos"
    ],
    nutritionInfo: {
      calories: 290,
      protein: 8,
      carbs: 50,
      fat: 6
    },
    tags: ["pão", "hambúrguer", "artesanal"],
    isLactoseFree: true
  },
  {
    id: "91",
    title: "Bolo de Abacaxi Invertido",
    description: "Bolo caramelizado com rodelas de abacaxi",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    prepTime: 65,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "3 ovos",
      "1/2 xícara de óleo",
      "1/2 xícara de suco de abacaxi",
      "1 colher de sopa de fermento",
      "Caramelo: 1 xícara açúcar, 1/4 xícara água",
      "Rodelas de abacaxi em calda",
      "Cerejas para decorar"
    ],
    instructions: [
      "Faça caramelo e despeje no fundo da forma",
      "Arrume rodelas de abacaxi e cerejas",
      "Bata ovos com açúcar",
      "Adicione óleo e suco",
      "Misture farinha e fermento",
      "Despeje sobre as frutas",
      "Asse a 180°C por 45 minutos",
      "Desenforme ainda morno"
    ],
    nutritionInfo: {
      calories: 330,
      protein: 5,
      carbs: 56,
      fat: 11
    },
    tags: ["bolo", "frutas", "caramelo"],
    isLactoseFree: true
  },
  {
    id: "92",
    title: "Pão de Minuto na Frigideira",
    description: "Pão rápido e prático sem forno",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 20,
    servings: 6,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de leite vegetal",
      "2 colheres de sopa de óleo",
      "1 colher de chá de sal",
      "1 colher de sopa de fermento em pó"
    ],
    instructions: [
      "Misture todos os ingredientes",
      "Não sove, apenas incorpore",
      "Divida em 6 porções",
      "Modele discos",
      "Cozinhe em frigideira tampada em fogo baixo",
      "Vire quando dourar (5-7 min cada lado)"
    ],
    nutritionInfo: {
      calories: 210,
      protein: 6,
      carbs: 38,
      fat: 5
    },
    tags: ["pão", "rápido", "sem forno"],
    isLactoseFree: true
  },
  {
    id: "93",
    title: "Barrinha de Cereal Caseira",
    description: "Snack saudável com aveia e frutas secas",
    imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&q=80",
    prepTime: 35,
    servings: 15,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de aveia em flocos",
      "1 xícara de frutas secas picadas",
      "1/2 xícara de mel",
      "1/2 xícara de pasta de amendoim",
      "1/4 xícara de óleo de coco",
      "1 colher de chá de baunilha",
      "Pitada de sal"
    ],
    instructions: [
      "Misture mel, pasta de amendoim e óleo derretido",
      "Adicione aveia, frutas e sal",
      "Misture bem",
      "Pressione em forma forrada",
      "Asse a 170°C por 20 minutos",
      "Deixe esfriar completamente antes de cortar"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 5,
      carbs: 24,
      fat: 8
    },
    tags: ["lanche", "saudável", "cereal"],
    isLactoseFree: true
  },
  {
    id: "94",
    title: "Tortinha de Limão",
    description: "Sobremesa refrescante com creme de limão",
    imageUrl: "https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?w=800&q=80",
    prepTime: 90,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "Massa: 200g farinha, 100g margarina vegana, 2 colheres açúcar",
      "Recheio: 1 lata leite condensado sem lactose, suco de 4 limões",
      "Raspas de 2 limões",
      "3 gemas",
      "Merengue: 3 claras, 6 colheres açúcar"
    ],
    instructions: [
      "Faça massa misturando ingredientes",
      "Forre forminhas e asse a 180°C por 15 min",
      "Misture ingredientes do recheio e cozinhe",
      "Recheie as tortinhas",
      "Faça merengue batendo claras com açúcar",
      "Cubra e leve ao forno para dourar"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 5,
      carbs: 42,
      fat: 10
    },
    tags: ["doce", "limão", "torta"],
    isLactoseFree: true
  },
  {
    id: "95",
    title: "Biscoito Champagne",
    description: "Biscoito leve e crocante tradicional",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    prepTime: 40,
    servings: 40,
    difficulty: "médio",
    ingredients: [
      "3 ovos",
      "1 xícara de açúcar",
      "1 e 1/2 xícara de farinha de trigo",
      "1 colher de chá de fermento",
      "1 colher de chá de essência de baunilha",
      "Açúcar cristal para polvilhar"
    ],
    instructions: [
      "Bata ovos com açúcar até triplicar de volume",
      "Adicione baunilha",
      "Misture farinha e fermento delicadamente",
      "Coloque em saco de confeitar",
      "Faça palitos em assadeira",
      "Polvilhe açúcar cristal",
      "Asse a 180°C por 12-15 minutos"
    ],
    nutritionInfo: {
      calories: 55,
      protein: 1,
      carbs: 11,
      fat: 1
    },
    tags: ["biscoito", "leve", "festa"],
    isLactoseFree: true
  },
  {
    id: "96",
    title: "Vitamina de Açaí Energética",
    description: "Bebida poderosa com açaí e frutas",
    imageUrl: "https://images.unsplash.com/photo-1590080874088-eec64895b423?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "200g polpa de açaí congelada",
      "2 bananas",
      "1/2 xícara de frutas vermelhas",
      "300ml leite vegetal",
      "1 colher de sopa de mel",
      "Granola para servir"
    ],
    instructions: [
      "Bata açaí com bananas e leite",
      "Adicione frutas vermelhas",
      "Adoce com mel",
      "Sirva em tigela",
      "Decore com granola"
    ],
    nutritionInfo: {
      calories: 290,
      protein: 5,
      carbs: 52,
      fat: 8
    },
    tags: ["vitamina", "açaí", "energético"],
    isLactoseFree: true
  },
  {
    id: "97",
    title: "Bolo de Prestígio",
    description: "Bolo de chocolate com recheio de coco",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    prepTime: 70,
    servings: 14,
    difficulty: "médio",
    ingredients: [
      "Massa: 2 xícaras farinha, 2 xícaras açúcar, 3/4 xícara cacau, 3 ovos",
      "1 xícara óleo, 1 xícara leite vegetal, 1 colher fermento",
      "Recheio: 1 lata leite condensado sem lactose, 200g coco ralado",
      "Cobertura: 200g chocolate meio amargo, creme de leite vegetal"
    ],
    instructions: [
      "Prepare massa de chocolate e asse",
      "Cozinhe recheio até engrossar",
      "Corte bolo ao meio",
      "Recheie e cubra com ganache",
      "Decore com coco ralado"
    ],
    nutritionInfo: {
      calories: 420,
      protein: 6,
      carbs: 62,
      fat: 18
    },
    tags: ["bolo", "chocolate", "coco", "festa"],
    isLactoseFree: true
  },
  {
    id: "98",
    title: "Pãozinho de Leite Vegano",
    description: "Pãezinhos macios e fofinhos",
    imageUrl: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=800&q=80",
    prepTime: 130,
    servings: 15,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/4 xícara de leite vegetal morno",
      "10g fermento biológico",
      "1/4 xícara de açúcar",
      "1/4 xícara de óleo",
      "1 ovo para pincelar",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Dissolva fermento e açúcar no leite",
      "Adicione óleo",
      "Misture farinha e sal",
      "Sove por 10 minutos",
      "Deixe crescer 1 hora",
      "Divida em 15 bolinhas",
      "Deixe crescer 40 minutos",
      "Pincele com ovo e asse a 180°C por 15 minutos"
    ],
    nutritionInfo: {
      calories: 180,
      protein: 5,
      carbs: 32,
      fat: 4
    },
    tags: ["pão", "macio", "café da manhã"],
    isLactoseFree: true
  },
  {
    id: "99",
    title: "Sonho Assado",
    description: "Versão assada do clássico sonho recheado",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 150,
    servings: 12,
    difficulty: "difícil",
    ingredients: [
      "4 xícaras de farinha",
      "1 xícara de leite vegetal morno",
      "10g fermento biológico",
      "1/2 xícara açúcar",
      "1/2 xícara margarina vegana",
      "2 ovos",
      "Doce de leite vegano para rechear",
      "Açúcar cristal"
    ],
    instructions: [
      "Prepare massa doce e deixe crescer",
      "Divida em bolinhas",
      "Deixe crescer mais 1 hora",
      "Asse a 180°C por 15 minutos",
      "Recheie com doce de leite",
      "Passe no açúcar cristal"
    ],
    nutritionInfo: {
      calories: 320,
      protein: 6,
      carbs: 52,
      fat: 10
    },
    tags: ["doce", "pão", "recheado"],
    isLactoseFree: true
  },
  {
    id: "100",
    title: "Biscoito Sequilho",
    description: "Biscoito que derrete na boca",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    prepTime: 35,
    servings: 35,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de polvilho doce",
      "1 xícara de açúcar",
      "200g margarina vegana",
      "2 gemas",
      "1 colher de chá de essência de baunilha"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione gemas e baunilha",
      "Misture farinha e polvilho",
      "Faça bolinhas e achate",
      "Asse a 180°C por 15 minutos"
    ],
    nutritionInfo: {
      calories: 95,
      protein: 1,
      carbs: 13,
      fat: 4
    },
    tags: ["biscoito", "tradicional", "lanche"],
    isLactoseFree: true
  },
  {
    id: "101",
    title: "Brownie de Matcha com Chocolate Branco",
    description: "Brownie exótico com chá verde japonês",
    imageUrl: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80",
    prepTime: 50,
    servings: 16,
    difficulty: "médio",
    ingredients: [
      "200g chocolate branco vegano",
      "150g farinha de trigo",
      "3 ovos",
      "150g açúcar",
      "100ml óleo de coco",
      "2 colheres de sopa de matcha em pó",
      "1 colher de chá de baunilha",
      "Pitada de sal"
    ],
    instructions: [
      "Derreta chocolate branco com óleo",
      "Bata ovos com açúcar até cremoso",
      "Misture chocolate derretido",
      "Adicione farinha e matcha peneirados",
      "Adicione baunilha e sal",
      "Asse a 180°C por 28-30 minutos"
    ],
    nutritionInfo: {
      calories: 260,
      protein: 4,
      carbs: 30,
      fat: 14
    },
    tags: ["brownie", "matcha", "gourmet"],
    isLactoseFree: true
  },
  {
    id: "102",
    title: "Bolo de Iogurte com Frutas Vermelhas",
    description: "Bolo úmido com iogurte vegetal",
    imageUrl: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=800&q=80",
    prepTime: 55,
    servings: 12,
    difficulty: "fácil",
    ingredients: [
      "1 xícara de iogurte vegetal natural",
      "2 xícaras de farinha de trigo",
      "1 e 1/2 xícara de açúcar",
      "3 ovos",
      "1/2 xícara de óleo",
      "1 colher de sopa de fermento",
      "1 xícara de frutas vermelhas",
      "Raspas de limão"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione iogurte e óleo",
      "Misture farinha e raspas de limão",
      "Adicione fermento",
      "Incorpore frutas vermelhas",
      "Asse a 180°C por 40-45 minutos"
    ],
    nutritionInfo: {
      calories: 300,
      protein: 5,
      carbs: 48,
      fat: 10
    },
    tags: ["bolo", "frutas", "iogurte"],
    isLactoseFree: true
  },
  {
    id: "103",
    title: "Pão de Fermentação Natural",
    description: "Pão artesanal com levain caseiro",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    prepTime: 1440,
    servings: 1,
    difficulty: "difícil",
    ingredients: [
      "150g levain ativo",
      "500g farinha de trigo",
      "350ml água",
      "10g sal"
    ],
    instructions: [
      "Misture levain com água",
      "Adicione farinha e sal",
      "Faça dobras a cada 30 min (4 vezes)",
      "Deixe fermentar 12 horas",
      "Modele e coloque em banneton",
      "Fermente mais 3-4 horas",
      "Asse a 230°C com vapor por 40 minutos"
    ],
    nutritionInfo: {
      calories: 170,
      protein: 5,
      carbs: 35,
      fat: 1
    },
    tags: ["pão", "artesanal", "fermentação natural"],
    isLactoseFree: true
  },
  {
    id: "104",
    title: "Pão de Abóbora com Especiarias",
    description: "Pão doce aromático perfeito para o outono",
    imageUrl: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=800&q=80",
    prepTime: 140,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "2 xícaras de purê de abóbora",
      "3 xícaras de farinha de trigo",
      "1 xícara de farinha integral",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "1/4 xícara de mel",
      "2 colheres de chá de canela",
      "1 colher de chá de noz-moscada",
      "3 colheres de sopa de óleo",
      "1 colher de chá de sal"
    ],
    instructions: [
      "Dissolva fermento e mel na água",
      "Misture purê de abóbora",
      "Adicione farinhas, especiarias e sal",
      "Sove por 10 minutos",
      "Deixe crescer 1 hora",
      "Modele e deixe crescer 45 minutos",
      "Asse a 180°C por 35-40 minutos"
    ],
    nutritionInfo: {
      calories: 270,
      protein: 7,
      carbs: 50,
      fat: 5
    },
    tags: ["pão", "abóbora", "especiarias"],
    isLactoseFree: true
  },
  {
    id: "105",
    title: "Esfirra de Ricota Vegana",
    description: "Salgado árabe com recheio cremoso",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 90,
    servings: 20,
    difficulty: "médio",
    ingredients: [
      "500g farinha de trigo",
      "1 xícara de água morna",
      "10g fermento biológico",
      "Óleo e sal",
      "Recheio: 400g tofu firme, suco de limão, azeite, temperos"
    ],
    instructions: [
      "Prepare massa e deixe crescer",
      "Processe tofu com limão e temperos",
      "Abra discos de massa",
      "Recheie e modele",
      "Asse a 200°C por 15-20 minutos"
    ],
    nutritionInfo: {
      calories: 170,
      protein: 7,
      carbs: 26,
      fat: 4
    },
    tags: ["salgado", "árabe", "vegano"],
    isLactoseFree: true
  },
  {
    id: "106",
    title: "Mini Quiche de Cogumelos",
    description: "Salgado delicado para festas",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 60,
    servings: 15,
    difficulty: "médio",
    ingredients: [
      "Massa: 200g farinha, 100g margarina vegana, água",
      "Recheio: 300g cogumelos, 200ml creme de leite vegetal",
      "3 ovos",
      "Cebola, alho, sal, pimenta"
    ],
    instructions: [
      "Prepare massa e forre forminhas",
      "Refogue cogumelos com cebola e alho",
      "Bata ovos com creme vegetal",
      "Misture cogumelos",
      "Recheie as forminhas",
      "Asse a 180°C por 25-30 minutos"
    ],
    nutritionInfo: {
      calories: 160,
      protein: 5,
      carbs: 16,
      fat: 9
    },
    tags: ["salgado", "quiche", "cogumelos"],
    isLactoseFree: true
  },
  {
    id: "107",
    title: "Bombocado Tradicional",
    description: "Doce brasileiro clássico de coco",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    prepTime: 40,
    servings: 20,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de açúcar",
      "4 ovos",
      "200g coco ralado",
      "1 xícara de farinha de trigo",
      "1 colher de sopa de fermento",
      "Margarina para untar"
    ],
    instructions: [
      "Bata ovos com açúcar",
      "Adicione coco ralado",
      "Misture farinha",
      "Adicione fermento",
      "Distribua em forminhas untadas",
      "Asse a 180°C por 25 minutos"
    ],
    nutritionInfo: {
      calories: 150,
      protein: 3,
      carbs: 24,
      fat: 5
    },
    tags: ["doce", "coco", "brasileiro"],
    isLactoseFree: true
  },
  {
    id: "108",
    title: "Bem-Casado Vegano",
    description: "Docinho de casamento sem lactose",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&q=80",
    prepTime: 90,
    servings: 25,
    difficulty: "difícil",
    ingredients: [
      "Massa: 4 ovos, 1 xícara açúcar, 1 xícara farinha, fermento",
      "Recheio: 1 lata leite condensado sem lactose, gemas",
      "Cobertura: açúcar de confeiteiro"
    ],
    instructions: [
      "Bata ovos com açúcar até triplicar",
      "Adicione farinha e fermento",
      "Asse em forma rasa",
      "Corte círculos",
      "Prepare recheio e una pares",
      "Cubra com açúcar de confeiteiro"
    ],
    nutritionInfo: {
      calories: 140,
      protein: 3,
      carbs: 26,
      fat: 3
    },
    tags: ["doce", "festa", "casamento"],
    isLactoseFree: true
  },
  {
    id: "109",
    title: "Biscoito de Polvilho Frito",
    description: "Biscoito crocante e leve",
    imageUrl: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=800&q=80",
    prepTime: 40,
    servings: 30,
    difficulty: "médio",
    ingredients: [
      "500g polvilho azedo",
      "1 xícara de água",
      "1/2 xícara de óleo",
      "2 ovos",
      "2 colheres de chá de sal",
      "Óleo para fritar"
    ],
    instructions: [
      "Ferva água com óleo e sal",
      "Despeje sobre polvilho",
      "Deixe esfriar e adicione ovos",
      "Modele palitinhos",
      "Deixe secar um pouco",
      "Frite em óleo quente até inflar"
    ],
    nutritionInfo: {
      calories: 95,
      protein: 1,
      carbs: 12,
      fat: 5
    },
    tags: ["biscoito", "frito", "crocante"],
    isLactoseFree: true
  },
  {
    id: "110",
    title: "Biscoito Maria Caseiro",
    description: "Biscoito clássico levemente adocicado",
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=800&q=80",
    prepTime: 35,
    servings: 40,
    difficulty: "fácil",
    ingredients: [
      "3 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "150g margarina vegana",
      "1 ovo",
      "1 colher de chá de baunilha",
      "1 colher de chá de fermento",
      "Pitada de sal"
    ],
    instructions: [
      "Bata margarina com açúcar",
      "Adicione ovo e baunilha",
      "Misture farinha, fermento e sal",
      "Abra massa fina",
      "Corte círculos",
      "Fure com garfo",
      "Asse a 180°C por 12-15 minutos"
    ],
    nutritionInfo: {
      calories: 85,
      protein: 1,
      carbs: 13,
      fat: 3
    },
    tags: ["biscoito", "clássico", "simples"],
    isLactoseFree: true
  },
  {
    id: "111",
    title: "Vitamina de Espinafre com Abacaxi",
    description: "Bebida verde refrescante e nutritiva",
    imageUrl: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de espinafre fresco",
      "2 xícaras de abacaxi picado",
      "1 banana",
      "300ml água de coco",
      "Suco de 1/2 limão",
      "Hortelã fresca"
    ],
    instructions: [
      "Lave bem o espinafre",
      "Bata todos os ingredientes",
      "Sirva gelado"
    ],
    nutritionInfo: {
      calories: 130,
      protein: 3,
      carbs: 30,
      fat: 1
    },
    tags: ["vitamina", "verde", "detox"],
    isLactoseFree: true
  },
  {
    id: "112",
    title: "Vitamina de Mamão com Linhaça",
    description: "Bebida funcional para o intestino",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 mamão papaia",
      "2 colheres de sopa de linhaça",
      "1 banana",
      "300ml leite vegetal",
      "1 colher de sopa de mel",
      "Aveia a gosto"
    ],
    instructions: [
      "Descasque o mamão",
      "Bata todos os ingredientes",
      "Sirva imediatamente"
    ],
    nutritionInfo: {
      calories: 200,
      protein: 5,
      carbs: 38,
      fat: 4
    },
    tags: ["vitamina", "funcional", "saudável"],
    isLactoseFree: true
  },
  {
    id: "113",
    title: "Brownie de Avelã e Nutella Vegana",
    description: "Brownie sofisticado com avelãs",
    imageUrl: "https://images.unsplash.com/photo-1590841609987-4ac211afdde1?w=800&q=80",
    prepTime: 50,
    servings: 16,
    difficulty: "médio",
    ingredients: [
      "200g chocolate amargo sem lactose",
      "150g farinha de trigo",
      "4 ovos",
      "150g açúcar",
      "100ml óleo de coco",
      "1 xícara de avelãs picadas",
      "1/2 xícara de creme de avelã vegano",
      "1 colher de chá de baunilha"
    ],
    instructions: [
      "Derreta chocolate com óleo",
      "Bata ovos com açúcar",
      "Misture chocolate e baunilha",
      "Adicione farinha e metade das avelãs",
      "Despeje metade na forma",
      "Adicione colheradas de creme de avelã",
      "Cubra com restante da massa",
      "Polvilhe avelãs e asse a 180°C por 30 minutos"
    ],
    nutritionInfo: {
      calories: 310,
      protein: 6,
      carbs: 32,
      fat: 18
    },
    tags: ["brownie", "avelã", "gourmet"],
    isLactoseFree: true
  },
  {
    id: "114",
    title: "Bolo de Coco Gelado",
    description: "Sobremesa refrescante de coco",
    imageUrl: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80",
    prepTime: 240,
    servings: 12,
    difficulty: "médio",
    ingredients: [
      "Massa: 3 ovos, 1 e 1/2 xícara açúcar, 2 xícaras farinha, fermento",
      "Cobertura: 400ml leite de coco, 1 lata leite condensado sem lactose",
      "200g coco ralado",
      "Coco ralado para decorar"
    ],
    instructions: [
      "Prepare massa de bolo básico",
      "Asse e deixe esfriar",
      "Fure o bolo inteiro",
      "Misture leite de coco com leite condensado",
      "Despeje sobre o bolo",
      "Polvilhe coco ralado",
      "Leve à geladeira por 4 horas"
    ],
    nutritionInfo: {
      calories: 350,
      protein: 6,
      carbs: 54,
      fat: 13
    },
    tags: ["bolo", "coco", "gelado"],
    isLactoseFree: true
  },
  {
    id: "115",
    title: "Pão de Azeitona e Ervas",
    description: "Pão salgado aromático",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    prepTime: 130,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "4 xícaras de farinha de trigo",
      "1 e 1/2 xícara de água morna",
      "10g fermento biológico",
      "1 colher de sopa de açúcar",
      "3 colheres de sopa de azeite",
      "1 colher de chá de sal",
      "1 xícara de azeitonas pretas picadas",
      "Ervas: alecrim, orégano, tomilho"
    ],
    instructions: [
      "Dissolva fermento e açúcar na água",
      "Adicione azeite",
      "Misture farinha, sal e ervas",
      "Sove e adicione azeitonas",
      "Deixe crescer 1 hora",
      "Modele e deixe crescer 40 minutos",
      "Asse a 200°C por 30 minutos"
    ],
    nutritionInfo: {
      calories: 250,
      protein: 7,
      carbs: 44,
      fat: 6
    },
    tags: ["pão", "azeitona", "ervas"],
    isLactoseFree: true
  },
  {
    id: "116",
    title: "Rocambole de Chocolate com Creme",
    description: "Bolo enrolado recheado com creme",
    imageUrl: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80",
    prepTime: 60,
    servings: 10,
    difficulty: "difícil",
    ingredients: [
      "Massa: 5 ovos, 1 xícara açúcar, 1 xícara farinha, 1/2 xícara cacau",
      "Recheio: 1 lata leite condensado sem lactose, 200ml creme vegetal",
      "Cobertura: ganache de chocolate"
    ],
    instructions: [
      "Bata ovos com açúcar até triplicar",
      "Adicione farinha e cacau peneirados",
      "Asse em forma retangular por 10 min",
      "Desenrole ainda quente em pano úmido",
      "Prepare recheio batendo ingredientes",
      "Recheie e enrole",
      "Cubra com ganache"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 7,
      carbs: 58,
      fat: 14
    },
    tags: ["bolo", "rocambole", "chocolate"],
    isLactoseFree: true
  },
  {
    id: "117",
    title: "Empadão de Frango",
    description: "Torta salgada com recheio generoso",
    imageUrl: "https://images.unsplash.com/photo-1619681375758-68d342c21327?w=800&q=80",
    prepTime: 90,
    servings: 10,
    difficulty: "médio",
    ingredients: [
      "Massa: 3 xícaras farinha, 150g margarina vegana, 2 ovos, sal",
      "Recheio: 500g frango desfiado, 2 tomates, 1 cebola",
      "Azeitonas, milho, ervilha",
      "Temperos a gosto"
    ],
    instructions: [
      "Prepare massa misturando todos ingredientes",
      "Forre forma com 2/3 da massa",
      "Refogue recheio",
      "Recheie a torta",
      "Cubra com restante da massa",
      "Pincele com gema",
      "Asse a 200°C por 40 minutos"
    ],
    nutritionInfo: {
      calories: 380,
      protein: 22,
      carbs: 38,
      fat: 16
    },
    tags: ["salgado", "torta", "frango"],
    isLactoseFree: true
  },
  {
    id: "118",
    title: "Manjar Branco Vegano",
    description: "Sobremesa cremosa com calda de ameixa",
    imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80",
    prepTime: 180,
    servings: 8,
    difficulty: "médio",
    ingredients: [
      "400ml leite de coco",
      "400ml leite vegetal",
      "1 xícara de açúcar",
      "4 colheres de amido de milho",
      "100g coco ralado",
      "Calda: 200g ameixas secas, açúcar, água"
    ],
    instructions: [
      "Dissolva amido no leite vegetal",
      "Ferva leite de coco com açúcar",
      "Adicione mistura de amido mexendo",
      "Cozinhe até engrossar",
      "Adicione coco ralado",
      "Despeje em forma e leve à geladeira",
      "Prepare calda cozinhando ameixas",
      "Desenforme e sirva com calda"
    ],
    nutritionInfo: {
      calories: 280,
      protein: 3,
      carbs: 48,
      fat: 9
    },
    tags: ["doce", "sobremesa", "cremoso"],
    isLactoseFree: true
  },
  {
    id: "119",
    title: "Biscoito Amanteigado de Limão",
    description: "Biscoito refrescante com raspas de limão",
    imageUrl: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=800&q=80",
    prepTime: 35,
    servings: 30,
    difficulty: "fácil",
    ingredients: [
      "2 xícaras de farinha de trigo",
      "1 xícara de açúcar",
      "150g margarina vegana",
      "1 ovo",
      "Raspas de 2 limões",
      "1 colher de chá de suco de limão",
      "Pitada de sal"
    ],
    instructions: [
      "Bata margarina com açúcar e raspas",
      "Adicione ovo e suco",
      "Misture farinha e sal",
      "Abra massa e corte formatos",
      "Asse a 180°C por 12-15 minutos",
      "Opcional: glaceie com açúcar e lim��o"
    ],
    nutritionInfo: {
      calories: 100,
      protein: 1,
      carbs: 15,
      fat: 4
    },
    tags: ["biscoito", "limão", "refrescante"],
    isLactoseFree: true
  },
  {
    id: "120",
    title: "Vitamina de Pitaya Roxa",
    description: "Bebida vibrante e antioxidante",
    imageUrl: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&q=80",
    prepTime: 5,
    servings: 2,
    difficulty: "fácil",
    ingredients: [
      "1 pitaya roxa",
      "1 banana congelada",
      "1/2 xícara de morangos",
      "300ml leite de coco",
      "1 colher de sopa de mel",
      "Granola e frutas para decorar"
    ],
    instructions: [
      "Descasque a pitaya",
      "Bata todos os ingredientes",
      "Sirva em tigela",
      "Decore com granola e frutas"
    ],
    nutritionInfo: {
      calories: 210,
      protein: 3,
      carbs: 42,
      fat: 5
    },
    tags: ["vitamina", "pitaya", "colorido"],
    isLactoseFree: true
  }];
