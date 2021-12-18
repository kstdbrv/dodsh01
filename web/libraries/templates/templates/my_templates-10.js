/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// Register a templates definition set named "default".
CKEDITOR.addTemplates( 'default', {
	// The name of sub folder which hold the shortcut preview images of the
	// templates.
	imagesPath: CKEDITOR.getUrl( CKEDITOR.plugins.getPath( 'templates' ) + 'templates/images/' ),

	// The templates definitions.
	templates: [ 
		{
		title: 'Шаблон №1 с датаАтрибутами',
		image: 'template1.gif',
		description: 'Основные сведения',
		html: ' <div class="tp-1"><table class="table-1" border="1" width="750" align="center"><tbody><tr id="sec-1"><td> Полное и сокращенное (при наличии) наименование образовательной организации </td><td></td></tr><tr id="sec-2"><td> Дата создания образовательной организации </td><td itemprop="regDate"></td></tr><tr id="sec-4" itemprop="UchredLaw"><td rowspan="11"> Учредитель (наименование, место нахождения, график работы, телефон, электронная почта, адрес сайта в сети интернет, ФИО и телефоны курирующего отдела ДО и специалистов) </td><td itemprop="nameUchred"> Муниципальное образование город Краснодар </td><tr itemprop="UchredLaw"><td> Функции и полномочия собственника имущества учреждения осуществляются администрацией МО г. Краснодар. Учреждение является юридическим лицом, находящимся в ведении департамента образования муниципального образования город Краснодар. </td></tr><tr><td> Директор департамента образования - </br><b>Некрасов Алексей Сергеевич</b></br> График приёма граждан директором департамента образования:</br> Каждый четверг с 14:00 до 18:00 (по предварительной записи)</br></td></tr><tr><td> Начальник отдела дополнительного образования -</br>Шильников Станислав Валерьевич</br> тел. 8(861) 251-05-38 </td></tr><tr><td> Сотруднки отдела дополнительного образования ДО:</br> Смирнова Людмила Ивановна, заместитель начальника отдела,</br> 8 (861) 251-05-36</br> Манукян Мария Юрьевна, ведущий специалист,</br> 8 (861) 251-05-36</br> Щербакова Оксана Михайловна, ведущий специалист,</br> 8 (861) 251-05-36</br> Кириченко Елена Александровна, главный специалист, </br> 8 (861) 251-05-35</br> Лаухина Наталья Васильевна, ведущий специалист, </br>8 (861) 234-35-62</br> Божко Татьяна Викторовна, ведущий специалист, </br>8 (861) 239-31-59 </td></tr><tr itemprop="UchredLaw"><td itemprop="addressUchred"> Адрес: 350000 г. Краснодар, ул. Коммунаров, 150 </td></tr><tr><td> График работы: пн.- чт. 9.00-18.00, пт. 9.00-17.00 перерыв с 12.30 до 13.20 </td></tr><tr itemprop="UchredLaw"><td itemprop="telUchred"> Телефон: 8(861) 251-05-31 </td></tr><tr itemprop="UchredLaw"><td itemprop="websiteUchred"> Адрес сайта департамента образования: http://do.krd.ru </td></tr><tr itemprop="UchredLaw"><td itemprop="mailUchred"> Адрес электронной почты: edu@krd.ru </td></tr><tr><td> ФИО руководителя отдела ДО по округу, адрес, номер телефона </td></tr><tr><td rowspan="3"> Наименование представительств и филиалов образовательной организации (при наличии) (в том числе находящихся за пределами Российской Федерации) </td></tr><tr itemprop="filInfo"><td itemprop="nameFil"> Филиалов нет </p></td></tr><tr itemprop="repInfo"><td itemprop="nameRep"> Представительств нет </p></td></tr><tr><td rowspan="3"> Место нахождения образовательной организации, её представительств и филиалов (при наличии) </td><td itemprop="address"></td></tr><tr itemprop="filInfo"><td itemprop="addressFil"> адрес филиала </td></tr><tr itemprop="repInfo"><td itemprop="addressRep"> адрес представительств </td></tr><tr><td rowspan="4"> Режим и график работы образовательной организации, её представительств и филиалов (при наличии) </td><td itemprop="workTime"> пн.-пт. с 7.00 до 19.00 (как пример) </td></tr><tr><td><a href="#">Годовой календарный график работы на 2020-2021 уч.год</a></td></tr><tr itemprop="filInfo"><td itemprop="workTimeFil"> филиала </td></tr><tr itemprop="repInfo"><td itemprop="workTimeRep"> представительств </td></tr><tr><td rowspan="4"> Контактные телефоны образовательной организации, ее представительств и филиалов (при наличии) </td><td itemprop="telephone"> Телефон: 8 861-35-34-876 </td></tr><tr><td> Факс: 8 861-35-34-876 </td></tr><tr itemprop="filInfo"><td itemprop="telephoneFil"> филиала </td></tr><tr itemprop="repInfo"><td itemprop="telephoneRep"> представительств </td></tr></tr><tr id="sec-5"><td rowspan="3"> Адреса электронной почты образовательной организации, её представительств и филиалов (при наличии) </td><td itemprop="email"></td></tr><tr itemprop="filInfo"><td itemprop="emailFil"> филиала </td></tr><tr itemprop="repInfo"><td itemprop="emailRep"> представительств </td></tr><tr id="sec-6"><td rowspan="3"> Адреса официальных сайтов представительств и филиалов образовательой организации (при наличии) или страницы в информационно-телекоммуникационной сети "Интернет" </td><td></td></tr><tr itemprop="filInfo"><td itemprop="websiteFil"> филиала </td></tr><tr itemprop="repInfo"><td itemprop="websiteRep"> представительств </td></tr><tr><td rowspan="3"> Места осуществления образовательной деятельности, в том числе не указанных в приложении к лицензии (реестре лицензий) на осуществление образовательной деятельности в соответствии с частью 4 статьи 91 Федерального закона от 29 декабря 2012 г. N 273-ФЗ "Об образовании в Российской Федерации". </td><td itemprop="addressPlace"> адрес </td></tr><tr><td> адрес филиала </td></tr><tr><td> адрес представительств </td></tr><tr id="sec-11"><td> Схема проезда </td><td><p>Проезд</p><p>Маршрутное такси: 3, 4, 11, 25, 35, 36, 45, 47, 48, 85</p><p>Троллейбус: 15, 21</p><p>Смотрите карту <a href="https://yandex.ru/maps/-/CCUIRJedPC" target="blank">здесь.</a></p></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №2 с датаАтрибутами',
		image: 'template2.gif',
		description: 'Шаблон Структура и органы упрвления',
		html: ' <div class="tp-2"><h3 class="text-align-center">Органы управления (по Уставу)</h3><table class="table-1 table-5" border="1" width="750" align="center"><tbody><tr><td> Органы управления образовательной организации (по Уставу) с указанием наименований органов управления </td><td> Органы управления (перечислить) </td></tr><tr><td> Фамилии, имена, отчества (при наличии) и должности руководителей органов управления </td><td></td></tr><tr><td> Места нахождения органов управления образовательной организации </td><td></td></tr><td> Адреса официальных сайтов в информационно - телекоммуникационной сети "Интернет" органов управления образовательной организации </td><td></td></tr><tr><td> Адреса электронной почты органов управления образовательной организации (при наличии электронной почты) </td><td></td></tr><tr><td> Положения об органах управления образовательной организации с приложением указанных приложений в виде электронных документов </td><td> Положения </td></tr></tbody></table><h3 class="text-align-center">Структурные подразделения (при наличии)</h3><table class="table-1 table-5" border="1" width="750" align="center"><tbody><tr itemprop="structOrgUprav"><td> Структурные подразделения образовательной организации (по Уставу) с указанием наименований структурных подразделений </td><td itemprop="name"> Структурные подразделения (перечислить) </td></tr><tr itemprop="structOrgUprav"><td itemprop="name"> Фамилии, имена, отчества (при наличии) и должности руководителей структурных подразделений </td><td temprop="fio"></td></tr><tr itemprop="structOrgUprav"><td itemprop="name"> Места нахождения структурных подразделений образовательной организации </td><td itemprop="addressStr"></td></tr><tr><td> Адреса официальных сайтов в информационно - телекоммуникационной сети "Интернет" структурных подразделений образовательной организации </td><td itemprop="site"></td></tr><tr><td> Адреса электронной почты структурных подразделений образовательной организации (при наличии электронной почты) </td><td itemprop="email"></td></tr></tr><tr><td> Положения о структурных подразделениях образовательной организации с приложением указанных приложений в виде электронных документов </td><td itemprop="divisionClauseDocLink"> Положения </td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №3 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Документы',
		html: '<div class="tp-3"><table class="table-1" border="1" width="750" align="center"><tbody><tr><td> Копия Устава организации дополнительного образования с изменениями (при наличии) </td><td itemprop="ustavDocLink"></td></tr><tr><td id="accreditationDocLink"> Копия свидетельства о государственной аккредитации (с приложениями) (при наличии) </td><td></td></tr><tr><td> Правила внутреннего распорядка обучающихся с приложением электронного документа </td><td itemprop="localActStud"></td></tr><tr><td> Правила внутреннего трудового распорядка с приложением электронного документа </td><td itemprop="localActOrder"></td></tr><tr><td> Коллективный договор с приложением электронного документа </td><td itemprop="localActCollec"></td></tr><tr><td> Отчёт о результатах самообследования за предшествующий календарный год </td><td id="reportEduDocLink"></td></tr><tr><td> Дополнительные показатели самообследования за прошедший календарный год, необходимые для проведения НОКУОД </td><td></td></tr><tr><td> Публичный доклад за предшествующий учебный год </td><td></td></tr></tbody></table><h3 class="text-align-center">Результаты проверок</h3><table class="table-1" border="1" width="750" align="center"><tbody><tr><td> Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, отчёты об исполнении таких предписаний (до подтверждения органом, осуществляющим государственный контроль (надзор) в сфере образования, исполнения предписания или признания его недейстительным в установленном законом порядке (при наличии) </td><td id="prescriptionDocLink"></td></tr></tbody></table><h3 class="text-align-center">Локальные нормативные акты</h3><table class="table-1" border="1" width="750" align="center"><tbody></tbody><tr><td> Правила приема обучающихся с приложением электронного документа </td><td itemprop="priemDocLink"></td></tr><tr><td> Режим занятий обучающихся с приложением электронного документа </td><td itemprop="modeDocLink"></td></tr><tr><td> Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся с приложением электронного документа </td><td itemprop="tekKontrolDocLink"></td></tr><tr><td> Порядок и основания перевода, отчисления и восстановления обучающихся с приложением электронного документа </td><td itemprop="perevodDocLink"></td></tr><tr><td> Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) </td><td itemprop="vozDocLink"></td></tr><tr><td> Положение о сайте организации дополнительного образования </td><td></td></tr><tr><td> Приказы, положения, должностные инструкции </td><td></td></tr></tbody></table></table><table class="table-1" border="1" width="750" align="center"><h3 class="text-align-center">Противодействие коррупции</h3><tbody><tr><td> "Горячая линия" </td><td></td></tr><tr><td> Локальный акт о порядке пожертвований от граждан и юридических лиц </td><td></td></tr><tr><td> Реквизиты расчетного счета, на который поступают пожертвования </td><td></td></tr><tr><td> Отчет о расходовании пожертвований и целевых взносов физических и юридических лиц </td><td></td></tr></tbody></table><h3 class="text-align-center">Обработка персональных данных</h3><table class="table-1" border="1" width="750" align="center"><tbody><tr><td> Приказ о назначении ответственного за организацию обработки персональных данных в ОО </td><td></td></tr><tr><td> Правила (положение) о порядке обработки персональных данных, утвержденное руководителем ОО </td><td></td></tr><tr><td> Типовая форма согласия на обработку персональных данных работников и обучающихся, в соответствии со ст. 18.1. Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №4 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Образование',
		html: ' <div class="tp-4"><table id="aducation-1" class="table-1" border="1" width="750" align="center"><tbody><thead><tr><td colspan="2">Реализуемые образовательные программы, в том числе реализуемые адаптированные образовательные программы</td></tr></thead><tr><td> Наименование реализуемых образовательных программ </td><td></td></tr><tr itemprop="eduAccred"><td> Реализуемые уровни образования </td><td itemprop="eduLevel"></td></tr><tr itemprop="eduAccred"><td> Форма обучения </td><td itemprop="eduForm"></td></tr><tr itemprop="eduAccred"><td> Нормативные сроки обучения </td><td itemprop="learningTerm"></td></tr><tr><td> Срок действия государственной аккредитации образовательной программы, общественной, профессионально - общественной аккрудитации образовательной программы (при на личии общественной, профессионально - общественной аккредитации) </td><td></td></tr><tr itemprop="eduAccred"><td> Язык(и), на котором (ых) осуществляется образование (обучение) </td><td itemprop="language"></td></tr><tr><td> Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой </td><td></td></tr><tr><td> Практики, предусмотренной соответствующей образовательной программой </td><td></td></tr><tr><td> Использование при реализации образовательной программы электронного обучения и дистанционных образовательных технологий <td></td></tr><tr><td> Описание образовательной программы с приложением образовательной программы в форме электронного документа или в виде активных ссылок, непосредственный переход по которым позволяет получить доступ к страницам Сайта, содержащим информацию: </td><td></td></tr><tr><td>учебный план с приложением его в виде электронного документа<br/><br/>аннотации к рабочим программам дисциплин (по каждому учебному предмету, курсу, дисциплине (модулю), практики, в составе образовательной программы с приложением рабочих программ в виде электронного документа<br/><br/>календарный учебный график с приложением его в виде электронного документа<br/><br/>методические и иные документы, разработанные образовательной организацией для обеспечения образовательного процесса, в виде электронного документа </td><td></td></tr><tr><td colspan="2">Численность обучающихся, в том числе:</td></tr><tr><td> общая численность обучающихся </td><td></td></tr><tr itemprop="eduChislen"><td> численность обучающихся за счет бюджетных ассигнований федерального бюджета (в том числе с выделением численности обучающихся, являющихся иностранными гражданами </td><td itemprop="numberBF"></td></tr><tr itemprop="eduChislen"><td> численность обучающихся за счет бюджетных ассигнований бюджетов субъектов Российской Федерации (в том числе с выделением численности обучающихся, являющихся иностранными гражданами) </td><td itemprop="numberF"></td></tr><tr itemprop="eduAdOp"><td> численность обучающихся за счет бюджетных ассигнований местных бюджетов (в том числе с выделением численности обучающихся, являющихся иностранными гражданами) </td><td itemprop="eduEl"></td></tr><tr><td> численность обучающихся по договорам об образовании, заключаемых при приеме на обучение за счет средств физического и (или) юридического лица (далее - договор об оказании платных образовательных услуг) (в том числе с выделением численности обучающихся, являющихся иностранными гражданами) </td><td></td></tr><tr><td> наименование образовательной программы </td><td></td></tr><tr><td> Лицензия на осуществление образовательной деятельности (выписка из реестра лицензий на осуществление образовательной деятельности) </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №5 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Образовательные стандарты',
		html: ' <div class="tp-5"><h3 class="text-align-center">Образовательные стандарты и требования</h3><table id="aducation-4" class="table-1" border="1" width="750" align="center"><tbody><tr><td itemprop="eduFedDoc"> Применяемые федеральные государственные образовательные стандарты, федеральные государственные требования с приложением их копий или размещением гиперссылки на действующие редакции соответствующих документов </td><td itemprop="eduFedDoc"></td></tr><tr><td itemprop="eduStandartDoc"> Об утвержденных образовательных стандартах, самостоятельно устанавливаемых требованиях с приложением образовательных стандартов, самостоятельно устанавливаемых требований в форме электронного документа или в виде активных ссылок, непосредственный переход по которым позволяет получить доступ к образовательному стандарту, самостоятельно устанавливаемым требованиям в форме электронного документа </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №6 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Руководство. Педагогический состав.',
		html: ' <div class="tp-6"><table id="aducation-5" class="table-1" border="1" width="750" align="center"><h3 class="text-align-center">Руководитель образовательной организации</h3><tbody><tr itemprop="rucovodstvo"><td> Фамилия, имя, отчество (при наличии) </td><td itemprop="fio"></td></tr><tr itemprop="rucovodstvo"><td> Наименование должности </td><td itemprop="post"></td></tr><tr itemprop="rucovodstvo"><td> Контактные телефоны </td><td itemprop="telephone"></td></tr><tr itemprop="rucovodstvo"><td> Адрес электронной почты </td><td itemprop="email"></td></tr></tbody></table><h3 class="text-align-center">Заместители руководителя образовательной организации (при наличии)</h3><table id="aducation-6" class="table-1" border="1" width="750" align="center"><tbody><tr itemprop="rucovodstvoZam"><td> Фамилия, имя, отчество (при наличии) </td><td itemprop="fio"></td></tr><tr itemprop="rucovodstvoZam"><td> Наименование должности </td><td itemprop="post"></td></tr><tr itemprop="rucovodstvoZam"><td > Контактные телефоны </td><td itemprop="telephone"></td></tr><tr itemprop="rucovodstvoZam"><td> Адрес электронной почты </td><td itemprop="email"></td></tr></tbody></table><h3 class="text-align-center">Руководители филиалов, представительств образовательной организации (при наличии) </h3><table id="aducation-7" class="table-1" border="1" width="750" align="center"><tbody><tr itemprop="rucovodstvoFil"><td> Фамилия, имя, отчество (при наличии) </td><td itemprop="fio"></td></tr><tr itemprop="rucovodstvoFil"><td> Наименование должности </td><td itemprop="post"></td></tr><tr itemprop="rucovodstvoFil"><td > Контактные телефоны </td><td itemprop="telephone"></td></tr><tr itemprop="rucovodstvoFil"><td> Адрес электронной почты </td><td itemprop="email"></td></tr></tbody></table><table id="aducation-8" class="table-1" border="1" width="750" align="center"><tbody><tr><td> Персональный состав педагогических работников каждой реализуемой образовательной программы в форме электронного документа или в виде активных ссылок, непосредственный переход по которым позволяет получить доступ к страницам сайта, содержащим информацию:<br /><br /> - фамилия, имя, отчество (при наличии);<br /> - занимаемая должность (должности);<br /> - уровень образования;<br /> - квалификация;<br /> - наименование напраления подготовки и (или) специальности;<br /> - ученая степень (при наличии);<br /> - ученое звание (при наличии);<br /> - повышение квалификации и (или) профессиональная переподготовка (при наличии);<br /> - стаж работы по специальности<br /> - преподаваемые учебные предметы, курсы, дисциплины (модули) <br /></td><td itemprop="teachingStaff"> Персональный состав (таблица) </td></tr></tbody></table><a id="link-aducation-file" href="https://dodsh02.centerstart.ru/sites/dodsh02.centerstart.ru/files/%D0%A4%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%20(%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C%2C%20%D0%B7%D0%B0%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D1%8C%2C%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%B5%D1%81%D1%82%D0%B8%20%D0%B2%20PDF%20%D0%B8%20%D0%BF%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%20%D0%AD%D0%A6%D0%9F)%20(1).xlsx"><h3>Форма заполнения (скачать, заполнить, перевести в PDF, и подписать ЭЦП)</h3></a></div>'
	},
	{
		title: 'Шаблон №7 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Обесечение и оснащенность образовательного процесса',
		html: '<div class="tp-7"><h3 class="text-align-center">Материально-техническое обеспечение и оснащенность образовательного процесса </h3><table id="aducation-10" class="table-1" border="1" width="750" align="center"><tbody><tr itemprop="addressPlace"><td> Оборудованные учебные кабинеты </td><td itemprop="objName"></td></tr><tr itemprop="purposePrac"><td> Объекты для проведения практических занятий </td><td itemprop="objName"></td></tr><tr itemprop="purposeLibr"><td> Библиотека(и): электронный каталог изданий, содержащихся в фонде библиотеки образовательной организации </td><td itemprop="objName"></td></tr><tr itemprop="purposeSport"><td> Объекты спорта </td><td itemprop="objName"></td></tr><tr itemprop="purposeSport"><td> Средства обучения и воспитания </td><td itemprop="purposeFacil"></td></tr><tr><td> Условия питания обучающихся </td><td itemprop="meals"></td></tr><tr><td> Условия охраны здоровья обучающихся </td><td></td></tr><tr><td> Доступ к информационным системам и информационно - телекоммуникационным сетям </td><td itemprop="comNet"></td></tr><tr><td rowspan="3">Электронные образовательные ресурсы, к которым обеспечивается доступ обучающихся, в том числе:<br />собственные электронные образовательные и информационные ресурсы (при наличии) </td></tr><tr><td itemprop="purposeEios"></td></tr><tr><td itemprop="eoisOwn"></td></tr><tr><td> Сторонние электронные образовательные и информационные ресурсы (при наличии)<br />Официальный сайт Министерства просввещения Российской Федерации<br /> https://edu.gov.ru/;<br />Федеральный портал ""Российское образование"" http://www.edu.ru;<br />Информационная система ""Единое окно доступа к образовательным ресурсам""<br />http://windou.edu.ru;<br />Единая коллекция цифровых образовательных ресурсов<br />http://school-collection.edu.ru;<br />Федеральный центр информационно - образовательных ресурсов <br />http://fcior.edu.ru </td><td></td></tr></div>'
	},
	{
		title: 'Шаблон №8 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Стипендии и меры поддержки обучающихся',
		html: ' <div class="tp-8"><h3 class="text-align-center">Стипендии и меры поддержки обучающихся</h3><table id="support" class="table-1" border="1" width="750" align="center"><tbody><tr><td> Наличие и условия предоставления обучающимся стипендий </td><td temprop="localAct"></td></tr><tr><td> Меры социальной поддержки </td><td itemprop="support"></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №9 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Платные образовательные услуги',
		html: ' <div class="tp-9"><h3 class="text-align-center">Платные образовательные услуги</h3><table id="services" class="table-1" border="1" width="750" align="center"><tbody><tr><td> Порядок оказания платных образовательных услуг, в том числе образец договора об оказании платных образовательных услуг в виде электронных документов </td><td></td></tr><tr><td> Утверждение стоимости обучения по каждой образовательной программе в виде электронного документа </td><td itemprop="paidParents"></td></tr><tr><td> Установление размера платы, взимаемой с родителей (законных представителей) за осуществление присмотра и ухода за детьми в группах продленного дня в образовательной организации </td><td itemprop="paidEdu"></td></tr><tr><td> Расписание занятий по платным дополнительным образовательным услугам, не относящимся к основным видам деятельности с указанием Ф.И.О. педагогического работника </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №10 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Финансово-хозяйственная деятельность',
		html: ' <div class="tp-10"><h3 class="text-align-center"> Финансово - хозяйственная деятельность </h3><table id="fin-1" class="table-1" border="1" width="750" align="center"><tbody><tr><td itemprop="finBFVolume"> Информация об объёме образовательной деятельности, финансовое обеспечение которой осуществляется:<br /><br />- за счет бюджетных ассигнований федеарльного бюджета;<br /><br />- за счет бюджетов субъектов Российской Федерации;<br /><br />- за счет местных бюджетов;<br /><br />- по договорам об оказании платных образовательных услуг </td><td itemprop="finBRVolume"></td></tr><tr itemprop="volume"><td> Информация о поступлении финансовых и материальных средств по итогам финансового года </td><td itemprop="finPost"></td></tr><tr itemprop="volume"><td> Информация о расходовании финансовых и материальных средств по итогам финансового года </td><td itemprop="finRas"></td></tr><tr><td> Копия плана финансово - хозяйственной деятельности образовательной организации, утвержденного в установленном законодательством РФ порядке, или бюджетной сметы образовательной организации </td><td></td></tr><tr><td> Отчёт о выполнении муниципального задания за прошедший год </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №11 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Количество вакантных мест для приема',
		html:'<div class="tp-11"><h3 class="text-align-center">Вакантные места для приема (перевода) обучающихся</h3><table class="table-1" border="1" width="750" align="center"><tbody><tr itemprop="vacant"><td> Информация о количестве вакантных мест для приема (перевода) обучающихся за счет бюджетных ассигнований местных бюджетов </td><td itemprop="numberBMVacant"></td></tr><tr><td> Порядок приема </td><td></td></tr><tr><td> Перечень документов, необходимых для зачисления в образовательную организацию </td><td></td></tr></tbody></table></div>'
	},
	{
		title: 'Шаблон №12 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Доступная среда',
		html: '<div class="tp-12"><h3 class="text-align-center">Доступная среда</h3><table class="table-1" border="1" width="750" align="center"><tbody><tr><td colspan="2">Информация о специальных условиях для обучения инвалидов и лиц с ограниченными возможностями здоровья, в том числе: </td></tr><tr><td> о специально оборудованных учебных кабинетах; </td><td></td></tr><tr><td> об объектах для проведения практических занятий, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья; </td><td></td></tr><tr><td> о библиотеке(ах), приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья; </td><td></td></tr><tr><td> об объектах спорта, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья </td><td></td></tr><tr><td> о средствах обучения и воспитания, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья; </td><td></td></tr><tr><td> об обеспечении беспрепятственного доступа в здания образовательной организации; </td><td></td></tr><tr><td> о специальных условиях питания; </td><td></td></tr><tr><td> о специальных условиях охраны здоровья; </td><td></td></tr><tr><td> о доступе к информационным системам и информационно - телекоммуникационным сетям, приспособленным для использования инвалидами и лицами с ограниченными возможностями </td><td></td></tr><tr><td> об электронных образовательных ресурсах, к которым обеспечивается доступ инвалидов и лиц с ограниченными возможностями здоровья; </td><td></td></tr><tr><td> о наличии специальных технических средств обучения коллективного и индивидуального пользования; </td><td></td></tr></tbody></table></div> '
	},
	{
		title: 'Шаблон №13 с датаАтрибутами',
		image: 'template3.gif',
		description: 'Международное сотрудничество',
		html: '<div class="tp-13"><h3 class="text-align-center">Доступная среда</h3><table align="center" border="1" class="table-1" width="750"><tbody><tr itemprop="internationalDog"><td> Информация о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки (при наличии) </td><td itemprop="stateName"></td></tr><tr itemprop="internationalAccr"><td> Информация о международной аккредитации образовательных программ (при наличии) </td><td itemprop="eduName"></td></tr></tbody></div>'
	},
]
} );








