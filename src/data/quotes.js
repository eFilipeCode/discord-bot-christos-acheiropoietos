const quotes = [
    {
        quote: "'The Christian life does indeed mean battles and trials, but it also means consolations. And though I must leave Tabor and climb to Calvary, one day I will leave Calvary with Jesus and return to Tabor. A foretaste of Heaven awaits me there. My soul follows but one path: from Golgotha to Tabor. It leaves Golgotha to seek strength and courage at Tabor. Life is such a ladder.'",
        author: 'St. Bernadette Soubirous'
    },
    {
        quote: "'Let us carry our crosses with love; let us see that they do not become a burden to others, but let us help others carry theirs.'",
        author: 'St. John Bosco'
    },
    {
        quote: "'In a word, let us be all to God, all for God and all in God; and remember that He wills you to lead an exemplary life, wholly pure and angelic.'",
        author: 'St. Margaret Mary Alacoque, to her brother a priest'
    },
    {
        quote: "'Place your hopes in the mercy of God and the merits of Our Redeemer; say often, looking at the crucifix: There are centred all my hopes.'",
        author: 'St. Paul of the Cross'
    },
    {
        quote: "'As I have often told you, there is nothing so vile as the impure soul. There was once a saint who had asked the good God to show him one; and he saw the poor soul like a dead beast that has been dragged through the streets in the hot sun for a week.'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
    },
    {
        quote: "'I need nothing but God, and to lose myself in the heart of God.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: `'But the contemplation of God is gained in a variety of ways. For we not only discover God by admiring His incomprehensible essence, a thing which still lies hid in the hope of the promise, but we see Him through the greatness of His creation, and the consideration of His justice, and the aid of His daily providence: when with pure minds we contemplate what He 
  has done with His saints in every generation, when with trembling heart we admire His power with which He governs, directs, and rules all things, or the vastness of His knowledge, and that eye of His from which no secrets of the heart can lie hid, when we consider the sand of the sea, and the number of the waves measured by Him and known to Him, when in our wonder we think that the drops of rain, the days and hours of the ages, and all things past and future are present to His knowledge; when we gaze in unbounded admiration on that ineffable mercy of His, which with unwearied patience endures countless sins which are 
  every moment being committed under His very eyes, or the call with which from no antecedent merits of ours, but by the free grace of His pity He receives us; or again the numberless opportunities of salvation which He grants to those whom He is going to adopt -- that He made us be born in such a way as that from our very cradles His grace and the knowledge of His law might be given to us, that He Himself, overcoming our enemy in us simply for the pleasure of His good will, rewards us with eternal bliss and everlasting rewards, when lastly He undertook the dispensation of His Incarnation for our salvation, and extended the marvels of His sacraments to all nations. But there are numberless other considerations of this sort, which arise in our minds according to the character of our life and the purity of our heart, by which God is either seen by pure eyes or embraced: which considerations certainly no one will preserve lastingly, if anything of carnal affections still survives in him, because "thou canst not," saith the Lord, "see My face: for no man shall see Me and live;" viz., to this world and to earthly affections.'`,
        author: 'St. Moses the Black Hermit'
    },
    {
        quote: "'O tender Mother, unutterable was thy grief in finding thyself deprived of thy dear Son, and then in beholding Him dead in thy arms!'",
        author: 'St. Paul of the Cross'
    },
    {
        quote: "'In the warfare of the flesh, only cowards gain the victory; that is to say, those who fly.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'More determination is required to subdue the interior man than to mortify the body; and to break one's will than to break one's bones.'",
        author: 'St. Ignatius of Loyola'
    },
    {
        quote: "'Meanwhile the months passed, and I was not at all better. On the fourth of January the doctors cauterized twelve times. After this I became even worse. In addition to this illness of the spine, on the 28th of January, I began to suffer an insupportable pain in the head. The doctor diagnosed the trouble as a tumor of the brain. Because I was extremely weak there could not be an operation and I became worse every day. On the second of February I confessed and I received Viaticum and awaited the moment for going to Jesus. The doctors, whispering thinking I could not hear, said among themselves that I would not live until midnight. Viva Gesu!'",
        author: 'St. Gemma Galgani'
    },
    {
        quote: "'Devotion to the Blessed Virgin is actually necessary, because there is no better means of obtaining God's graces than through His most holy mother.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'We must accept the adversities which God sends us without reasoning too much upon them, and we must take for granted that it is the best thing which could happen to us.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'What does God hate or punish except self-will? Let self-will cease, and there will be no hell. On what does that fire feed except on self-will?'",
        author: 'St. Bernard of Clairvaux'
    },
    {
        quote: "'What could be more out of keeping with our holy religion than impure language? It outrages God. It scandalizes our neighbor. Can a Christian really afford to occupy his mind with such horrible images?'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
    },
    {
        quote: "'Oh, how senseless we are! the good God calls us to Him, and we fly from Him! He wishes to make us happy, and we will not have His happiness. He commands us to love Him, and we give our hearts to the devil. We employ in ruining ourselves the time He gives us to save our souls. We make war upon Him with the means He gave us to serve Him.'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
    },
    {
        quote: "'God, to procure His glory, sometimes permits that we should be dishonored and persecuted without reason. He wishes thereby to render us conformable to His Son, who was calumniated and treated as a seducer, as an ambitious man, and as one possessed.'",
        author: 'St. Vincent de Paul'
    },
    {
        quote: "'The Sacred Heart of Jesus Christ gives you these holy aspirations through the ardent love He bears you, which makes Him desire to possess your heart whole and entire.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'It happened once that I was journeying to visit my aged mother in Burgundy. And when passing through the woods on the other side of the river Bebre we came upon highwaymen. They cut us off from escape and were going to rob and kill us. Then I resorted to my usual means of assistance and called on St. Martin for help. And he came to my help at once and efficiently, and so terrified them that they could do nothing against us. And instead of causing fear they were afraid, and were beginning to flee as fast as they could. But I remembered the apostle's words that our enemies ought to be supplied with food and drink, and told my people to offer them drink. They wouldn't wait at all, but fled at top speed. One would think that they were being clubbed along or were being hurled along involuntarily faster than their horses could possibly go.'",
        author: 'St. Gregory of Tours'
    },
    {
        quote: "'Let us proceed joyfully and let us be sure that all our crosses will bear Christ with them, and that His help, which will never be wanting to us, will be more powerful than the combined efforts of all our enemies.'",
        author: 'St. Ignatius of Loyola'
    },
    {
        quote: "'A man who teaches without doing what he teaches is like a spring which cleanses and gives drink to everyone, but it is not able to purify itself.'",
        author: 'St. Poemen'
    },
    {
        quote: "'The hostility of the perverse sounds like praise for our life because it shows that we have at least some rectitude if we are an annoyance to those who do not love God; no one can be pleasing to God and to God's enemies at the same time. He who seeks to please those who oppose God is no friend of God; and he who submits himself to the truth will fight against those who strive against truth.'",
        author: 'Pope St. Gregory the Great'
    },
    {
        quote: "'It is said that gold rules everything; but spiritual things are ruled by the grace of God.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Blessed the one whose thought has been with grace, like a cloud filled with rain, and which waters souls for the increase of fruits of life; his praise will be for everlasting glory.'",
        author: 'St. Ephrem of Syria'
    },
    {
        quote: `'When Scripture says "He will reward every man according to his works" (Matt. 16: 27), do not imagine that works 
    in themselves merit either hell or the kingdom. On the contrary, Christ rewards each man according to whether his works are done with faith or without faith in Himself; and He is not a dealer bound by contract, but God our Creator and Redeemer.'`,
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Fulfilling a commandment is one thing, and virtue is another, although each promotes the other.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: `'Before I proceed farther I exhort every one of you to make a general confession, if you have not as yet made one. And I now speak not only of those whose confessions have been sacrilegious on account of having concealed sins, or invalid 
    for want of sufficient examination of conscience, or of sufficient sorrow; but I speak of all who wish to be permanently converted to God. A general confession is a great means of bringing about a true change of life. After her conversion to God, St. Margaret of Cortona told all her sins to her confessor, and thereby made herself so pleasing and dear to God, that our Lord 
    himself spoke to her and called her, "My sinful one; my poor little one." She one day said to Jesus Christ: "Lord, when wilt 
    Thou call me Thy daughter?" Jesus Christ answered: "When thou hast made a general confession of thy whole life then I will call you my daughter." She made a general confession, and from that time Jesus Christ always called her his child.'`,
        author: 'St. Alphonsus Maria de Liguori'
    },
    {
        quote: `'The Passion of Christ is the door which opens into the delicious pastures of the soul. Our divine Saviour has said: "I am the door. By Me if any man enter in, he shall be saved." (John x. 9.)'`,
        author: 'St. Paul of the Cross'
    },
    {
        quote: "'I have indeed thanked the Sacred Heart of our Lord Jesus Christ for the graces that He gives you, and I have besought Him to continue to bestow them upon you and to make you correspond faithfully with them, so that you may persevere steadfastly in the holy desire He gives you to love and glorify Him by making Him known.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'According to St. Clement there is no more perfect image of the Deity than a soul which, whether in prosperity or in adversity, always maintains its interior peace.'",
        author: 'St. Mary Euphrasia Pelletier'
    },
    {
        quote: "'The completely purified intellect is cramped by created beings and longs to go beyond them.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'Poverty is the glorious standard, the impregnable fortress of the religious life.'",
        author: 'St. Paul of the Cross'
    },
    {
        quote: `'Remember also that for you certain useless books, though not bad, will be pernicious; because they will make yo u
     lose the time that you can employ in occupations profitable to the soul. In a letter to his disciple Eustochium, St. Jerome 
    stated for her instruction that in his solitude at Bethlehem he was attached to the works of Cicero, and frequently read them, and that he felt a certain disgust for pious books because their style was not polished. He was seized with a serious malady, in which he saw himself at the tribunal of Jesus Christ. The Lord said to him: "Tell me; what are you?" "I am," replied the saint, "a Christian." "No," rejoined the Judge, "you are a Ciceronian, not a Christian." He then commanded him to be instantly scourged. The saint promised to correct his fault, and having returned from the vision he found his shoulders livid and covered with wounds in consequence of the chastisement that he had received. Thenceforward he gave up the works of Cicero, and devoted himself to the reading of books of piety. It is true that in the works like those of Cicero we sometimes find useful sentiments; but the same St. Jerome wisely said in a letter to another disciple: "What need have you of seeking for a little gold in the midst of so much mire," when you can read pious books in which you may find all gold without any mire?'`,
        author: 'St. Alphonsus Maria de Liguori'
    },
    {
        quote: "'If you have been given spiritual knowledge, you have been given noetic light; should you dishonor that light, you will see darkness.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'We must not be too ready to trust young men who have great devotion; we must wait till their wings are grown, and then see what sort of a flight they make.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'Therefore, since such are the promises, let us not only bear, but let us endure with joy all things, both those that are present, those that are whispered about and those that are expected, as we listen to the Apostle when he says: Now I rejoice in my sufferings for your sake, and in my flesh I complete what is lacking in Christ's afflictions for the sake of his body, that is the Church [Col. 1:24]. And again Saint James who says: My brethren, whenever you face trials of any kind, consider it nothing but joy, because you know that the testing of your faith produces endurance; and let endurance have its full effect, so that you may be perfect and complete, lacking in nothing [James 1:2-4]. Do you see then that in trials there is joy, and in tribulations gladness? For these are the things that are exchanged where God is concerned; and this is how the saints led their lives; this too how we, by doing violence to ourselves and yet greater violence, and by living our life in their footsteps, shall inherit the kingdom of heaven, in Christ Jesus our Lord, to whom be glory and might, with the Father and the Holy Spirit, now and always and to the ages of ages. Amen.",
        author: 'St. Theodore the Studite'
    },
    {
        quote: "'In the Catholic Church, there are many other things which most justly keep me in her bosom. The consent of peoples and nations keeps me in the Church; so does her authority, inaugurated by miracles, nourished by hope, enlarged by love, established by age. The succession of priests keeps me, beginning from the very seat of the Apostle Peter, to whom the Lord, after His resurrection, gave it in charge to feed His sheep, down to the present episcopate. And so, lastly, does the name itself of Catholic, which, not without reason, amid so many heresies, the Church has thus retained; so that, though all heretics wish to be called Catholics, yet when a stranger asks where the Catholic Church meets, no heretic will venture to point to his own chapel or house. Such then in number and importance are the precious ties belonging to the Christian name which keep a believer in the Catholic Church, as it is right they should. . . With you, where there is none of these things to attract or keep me. . . No one shall move me from the faith which binds my mind with ties so many and so strong to the Christian religion. . . For my part, I should not believe the gospel except as moved by the authority of the Catholic Church.'",
        author: 'St. Augustine'
    },
    {
        quote: "'Let your heart consume itself more and more in the sanctuary of the Heart of Jesus, and let the ashes of the victim fall into the boundless ocean of divine charity.'",
        author: 'St. Paul of the Cross'
    },
    {
        quote: `'If "he who speaks evil of his brother, and judges his brother, speaks evil of the law, and judges the law" (Jas. 4:11), and the law of Christ is love, surely he who speaks evil of Christ's love falls away from it and is the cause of his 
    own perdition.'`,
        author: 'St. Maximos the Confessor'
    },
    {
        quote: "'Misery to thee, fatal torrent of human customs; wilt thou never suspend thy course? To the end wilt thou drag in the children of Adam to thine immense and terrible abyss?'",
        author: 'St. Augustine'
    },
    {
        quote: "'Every morning as soon as you get up think of all the most disagreeable things that could happen to you during the day. Your house might be burnt down, you might lose your job or all your savings, or be run over, or sudden death might come to you or to a person you love. Accept these misfortunes should it please God to allow them; compel your will to agree to the sacrifice and give yourself no rest until you really feel prepared to wish or not to wish all that God may wish or not wish.'",
        author: 'St. Claude de la Colombiere'
    },
    {
        quote: "'Take for your motto: Love has conquered me, it alone shall possess my heart.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'He who is ignorant of the enemy's ambush is easily slain; and he who does not know the causes of the passions is soon brought low.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Brethren and Fathers, just as the hungry long to eat and the thirsty to drink, so we should be enthusiastic to listen to the word of God. For by listening we gain the greatest benefits. If we are slothful, we put away sloth; if we are eager, we become even more eager; and from both the outcome is good.'",
        author: 'St. Theodore the Studite'
    },
    {
        quote: "'I was born poor; I lived poor; I wish to die poor.'",
        author: 'Pope St. Pius X'
    },
    {
        quote: "'A virtuous life consists in mortifying vices, sins, bad thoughts, and evil affections, and in exercising ourselves in the acquisition of holy virtues.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'I was greatly consoled by the pleasure you gave our Lord in embracing His cross with joy and submission. It is true that He covered it entirely with roses, lest it should frighten you. But it is not so much in this that you should rejoice, but rather that you feel the pricks of the thorns hidden beneath.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'Praise from others engenders sinful desire, while their condemnation of vice, if not only heard but accepted, engenders self-restraint.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Even if we possess a splendid doctrine, the person who feels condemned by his own conscience remains disgraced.'",
        author: 'St. Jerome'
    },
    {
        quote: "'We should not be quick at correcting others, but rather to think of ourselves first.'",
        author: 'St. Philip Neri'
    },
    {
        quote: "'There is another kind of sadness as well, which is more detestable. It inspires in the wrongdoer not amendment of life or correction of vice but the most pernicious despair of soul. It did not cause Cain to repent after his brother's murder or Judas to hasten to healing and reparation after the betrayal; instead it drew him to hang himself with a noose in his despair.'",
        author: 'St. John Cassian'
      },
    {
        quote: "'Human affairs are fainter than a shadow; more deceitful than a dream. Youth fades more quickly than the flowers of spring; our beauty wastes with age or sickness.Riches are uncertain; glory is fickle.The pursuit of arts and sciences is bounded by the present life; the charm of eloquence, which all covet, reaches but the ear: whereas the practice of virtue is a precious possession for its owner, a delightful spectacle for all who witness it.Make this your study; so will you be worthy of the good things promised by the Lord.'",
        author: 'St. Basil the Great'
      },
    {
        quote: "'It is a certain, well established fact that no other crime so seriously offends God and provokes His greatest wrath as the vice of heresy. Nothing contributes more to the down fall of provinces and kingdoms than this frightful pest.'",
        author: 'St. Charles Borromeo'
    },
    {
        quote: "'Therefore, since such are the promises, let us not only bear, but let us endure with joy all things, both those that are present, those that are whispered about and those that are expected, as we listen to the Apostle when he says: Now I rejoice in my sufferings for your sake, and in my flesh I complete what is lacking in Christ's afflictions for the sake of his body, that is the Church [Col. 1:24]. And again Saint James who says: My brethren, whenever you face trials of any kind, consider it nothing but joy, because you know that the testing of your faith produces endurance; and let endurance have its full effect, so that you may be perfect and complete, lacking in nothing [James 1:2-4]. Do you see then that in trials there is joy, and in tribulations gladness? For these are the things that are exchanged where God is concerned; and this is how the saints led their lives; this too how we, by doing violence to ourselves and yet greater violence, and by living our life in their footsteps, shall inherit the kingdom of heaven, in Christ Jesus our Lord, to whom be glory and might, with the Father and the Holy Spirit, now and always and to the ages of ages. Amen.",
        author: 'St. Theodore the Studite'
      },
    {
        quote: "'I ought to burn of love for God out of gratitude for the kindness that He has shown me.'",
        author: 'St. Paul of the Cross'
    },
    {
        quote: "'When a man outwardly praises someone, while accusing and disparaging him in his heart, it is hard for the simple to detect this. Similarly a person may be outwardly humble but inwardly arrogant. For a long time such men present falsehood as truth, but later they are exposed and condemned.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Rain is good and earth is good, yet mingled they form mud. In similar fashion, though the hands of men and women are both good, yet evil may arise in thought and affection if they are brought together.'",
        author: 'Bl. Jordan of Saxony'
    },
    {
        quote: "'I cannot tell you how much pleasure your short letter gave me. It shows the bond of charity which unites you and my unworthy self, a bond God has established and wishes to maintain. It is with this in mind that I am writing to tell you briefly about my state of mind at the moment. I have not found here what I had hoped for and what led me to leave such a holy place as St.Sulpice, almost against my better judgement.'",
        author: 'St. Louis Marie de Montfort'
      },
    {
        quote: "'God, whose essence is without origin or consummation, is also impenetrable in His wisdom.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'I learn with joy that your confessor treats you rigorously, that he is hard and severe. Oh, what an excellent friend he is to you! It is now that God will put the last touch to the statue in order to embellish it and render it worthy of heaven; therefore He permits him, who ought to encourage you, to use the finest and sharpest tools.Oh, what a noble work! Beg God not to deprive you of that instrument until the work that He wishes to effect in you be accomplished.Do not be troubled by the annoyances and fears that your confessor occasions you.Listen to him with deep humility, simplicity, and silence.'",
        author: 'St. Paul of the Cross'
      },
    {
        quote: `'My trials are great! However, "although God should kill me, I will trust in Him." (Job xiii. 15.) What ought a poor shipwrecked person do when in the midst of furious billows and on the point of being engulfed? I have no other resource left but to turn my eyes to the Lord.'`,
        author: 'St. Paul of the Cross'
    },
    {
        quote: `'Let us each realize, then, what we have lost and repeat the lamentation of the prophet: "Our inheritance is despoiled by strangers and our house by aliens" (Lam. 5:2), because we disobeyed the commandment and surrendered ourselves to our own desires, delighting in sordid and worldly thoughts. Then our soul was far away from God and we were like fatherless orphans. Thus, if we are concerned for our own soul we must make every effort to purge away evil thoughts and "all the self-esteem that exalts itself against the knowledge of God" (2 Cor. 10:5). And when we have forcibly applied ourselves to keeping God's temple spotless, then He who promised to make His dwelling in it will come to us. Then the soul recovers its inheritance and is privileged to become a temple of God. For, after thus Himself expelling the devil and his army, from henceforth He reigns within us.'`,
        author: 'St. Symeon Metaphrastis'
    },
    {
        quote: "'Let him who seeks true humility, employ two means: mental prayer, meditating on the greatness of God, and his own nothingness; vocal prayer, asking it of God, through the merits of Jesus and Mary.'",
        author: 'St. Benedict Joseph Labre'
    },
    {
        quote: "'Only spiritual conversation is beneficial; it is better to preserve stillness than to indulge in any other kind.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'Nothing is so beautiful as a pure soul. If we understood this, we could not lose our purity. The pure soul is disengaged from matter, from earthly things, and from itself. . . That is why the saints ill-treated their body, that is why they did not grant it what it required, not even to rise five minutes later, to warm themselves, to eat anything that gave them pleasure. . . For what the body loses the soul gains, and what the body gains the soul loses.'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
    },
    {
        quote: `'One of the clearest proofs that we love God is to seek only His good pleasure, to desire God alone: Dilectus meus mihi et ego illi - "My Beloved to me, and I to Him " (Cant. ii. 16), and to do His will as soon as we know it.'`,
        author: 'St. Paul of the Cross'
    },
    {
        quote: "'Life without the cross would be unbearable. All happiness here below consists in being able to suffer.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'What does it matter in the light of eternity?'",
        author: 'St. Bernard of Clairvaux'
    },
    {
        quote: "'Let a man consider that God always seeth him from Heaven, that the eye of God beholdeth his works everywhere, and that the angels report them to Him every hour.'",
        author: 'St. Benedict'
    },
    {
        quote: "'When you see two evil men befriending one another, you may be sure that each is cooperating with the other's desires.'",
        author: 'St. Mark the Ascetic'
    },
    {
        quote: "'Prayer is the inner bath of love into which the soul plunges itself.'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
    },
    {
        quote: "'Rightly motivated, the intellect will find the truth; but motivated by passion it will miss the mark.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: `'If you say the Rosary faithfully until death, I do assure you that, in spite of the gravity of your sins "you shall receive a never-fading crown of glory." Even if you are on the brink of damnation, even if you have one foot in hell, even if you have sold your soul to the devil as sorcerers do who practice black magic, and even if you are a heretic as obstinate as a devil, sooner or later you will be converted and will amend your life and save your soul, if - and mark well what I say - if you say the Rosary devoutly every day until death for the purpose of knowing the truth and obtaining contrition and pardon for your sins.'`,
        author: 'St. Louis Marie de Montfort'
    },
    {
        quote: "'He who has put his passions to death and overcome ignorance goes from life to life.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: `'Suppose you have an opportunity of making such and such profit, but it is dishonest to do so; or an opportunity 
    occurs for you to indulge yourself in some pleasure, but that pleasure is unlawful; the duties of your state trouble you, or 
    the labors of your employment weary you; and for the sake of your God you do not care to make that profit, you renounce that 
    pleasure, do your duty, and continue your work, then you have the holy love of God, your love is a fire which operates; otherwise you have it not, your love towards God will not be true love, but false; it will be a love of the lips, and not a love of the heart:<BR><BR>"My little children, let us not love in word nor in tongue, but in deed and in truth."'`,
        author: 'St. Alphonsus Maria de Liguori'
    },
    {
        quote: "'Think how many saints there are in heaven who see their fathers, mothers, brothers, and other relatives in the damnation of hell, which is the misfortune of misfortunes and the height of all woes; and notwithstanding they adore, they love, they bless with joy and happiness that most just will because they see such a decree of divine justice concerning these relatives.'",
        author: 'St. Jean Eudes'
    },
    {
        quote: "'If there are some present who do not understand what is being said or sung, they know at least that all is said and sung to the glory of God, and that is sufficient for them to join in it devoutly.'",
        author: 'St. Augustine'
      },
    {
        quote: "'If we find ourselves in an abyss of resistance and opposition to the Will of God, we must submerge it in that of submission and conformity to our Lord. There, losing all our resistance, let us clothe ourselves with that salutary conformity to all His designs in our regard.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'Jesus, keep me under the standard of your cross. May the crucifix not be just something I wear, something I look at, but let it be alive in my heart. Let me be transformed into a living crucifixion, in union with you through the Eucharist. By meditating on your life and the most intimate feelings of your heart, let me draw souls to you from high on this cross where your love holds me forever.'",
        author: 'St. Bernadette Soubirous'
      },
    {
        quote: "'Every time we look at the Blessed Sacrament our place in heaven is raised forever.'",
        author: 'St. Gertrude the Great'
    },
    {
        quote: "'And when the malign one saw that through all this he could not obtain her damnation, it seems that he received from God the freedom to redouble his rage against her. Knowing how and how much she loved the honor of this monastery from her heart and the common good of all the sisters, he sought to afflict her in another way. So, one night, when the other sisters slept, she heard him walking around the monastery like a madman yelling with frightful and terrible voice. And after this, when he didn't receive from God freedom to destroy the monastery to the ground as happened to blessed Job, he did so much that, in a short while, the monastery was empty of both goods and sisters.'",
        author: 'St. Catherine of Bologna'
    },
    {
        quote: "'It seems to me we have nothing to fear when we look to God only and seek His glory alone, since He takes into account the goodwill alone of a heart that loves Him.'",
        author: 'St. Margaret Mary Alacoque'
    },
    {
        quote: "'It is evident that the revolt of man's will from that of God constitutes sin, and while that revolt continues, man's guilt remains. Those, therefore, that are in hell, having passed from this life with perverse wills, their guilt is not remitted, nor can it be, since they are no longer capable of change.When this life is ended, the soul remains forever confirmed either in good or evil according as she has here determined.As it is written: Where I shall find thee, that is, at the hour of death, with the will either fixed on sin or repenting of it, there I will judge thee.'",
        author: 'St. Catherine of Genoa'
      },
    {
        quote: `'I am writing to all the churches to let it be known that I will gladly die for God if only you do not stand in my way. I plead with you: show me no untimely kindness. Let me be food for the wild beasts, for they are my way to God. I am God's wheat and bread. Pray to Christ for me that the animals will be the means of making me a sacrificial victim for God. No 
    earthly pleasures, no kingdoms of this world can benefit me in any way. I prefer death in Christ Jesus to power over the farthest limits of the earth. He who died in place of us is the one object of my quest. He who rose for our sakes is my one desire. The prince of this world is determined to lay hold of me and to undermine my will which is intent on God. Let none of you 
    here help him; instead show yourselves on my side, which is also God's side. Believe instead what I am now writing to you. For though I am alive as I write to you, still my real desire is to die. My love of this life has been crucified, and there is 
    no yearning in my for any earthly thing. Rather within me is the living water which says deep inside me: "Come to the Father." I no longer take pleasure in perishable food or in the delights of this world I want only God's bread, which is the flesh of Jesus Christ, formed from the seed of David, and for drink I crave his blood, which is love that cannot perish. Pray for me that I may obtain my desire. I have not written to you as a mere man would, but as one who knows the mind of God.'`,
        author: 'St. Ignatius of Antioch'
    },
    {
        quote: "'God knows how useful it is to us to be obliged to pray, in order to keep us humble, and to exercise our confidence; and he therefore permits us to be assaulted by enemies too mighty to be overcome by our own strength, that by prayer we may obtain from his mercy aid to resist them; and it is especially to be remarked that no one can resist the impure temptations of the flesh, without recommending himself to God when he is tempted.'",
        author: 'St. Alphonsus Maria de Liguori'
    },
    {
        quote: "'Distress checks sensual pleasure; the fear of punishment withers desire.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'Every virtue in your soul is a precious ornament which makes you dear to God and to man. But holy purity, the queen of virtues, the angelic virtue, is a jewel so precious that those who possess it become like the angels of God in Heaven, even though clothed in mortal flesh.'",
        author: 'St. John Bosco'
    },
    {
        quote: "'Too much hatred of our neighbor's faults begets more aversion than amendment, and, far from helping him, puts him to flight.'",
        author: 'St. Ignatius of Loyola'
    },
    {
        quote: "'Do not consider what others do, or how they do it; for there are but few who really work for their own sanctification.'",
        author: 'St. Alphonsus Maria de Liguori'
    },
    {
        quote: "'Moderate fasting, vigils and psalmody are natural means for achieving a balance in the body's temperament.'",
        author: 'St. Thalassios the Libyan'
    },
    {
        quote: "'It is not so much because of need that gold has become an object of desire among men, as because of the power it gives most people to indulge in sensual pleasure.'",
        author: 'St. Maximos the Confessor'
      },
      {
        quote: "'The true ruler is he who rules over himself and has subjected soul and body to the intelligence.'",
        author: 'St. Thalassios the Libyan'
      },
      {
        quote: "'This woman has deceived you and my confessor also; be more prudent in future; remember what the Scriptures say: there are people who, under an aspect of humility, conceal hearts full of malice and wickedness. Beware, above all, of believing anyone without enquiry.'",
        author: 'St. Lydwine of Schiedam'
      },
      {
        quote: `'The saints understood how great an outrage sin is against God. Some of them passed their lives in weeping for their sins. St. Peter wept all his life; he was still weeping at his death. St. Bernard used to say, "Lord! Lord! it is I who fastened You to the Cross!"'`,
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
      },
      {
        quote: "'Regard yourself as more vile and miserable in the sight of God because of your faults than any sinner whatever, no matter what his sins. . . and consider closely that any grace or inclination to good or desire of virtue you may have, is not of yourself but of the sole mercy of Christ.'",
        author: 'St. Vincent Ferrer'
      },
      {
        quote: "'Every one ought to give in readily to the opinion of another, and to argue in favour of another and against himself, and take things in good part.'",
        author: 'St. Philip Neri'
      },
      {
        quote: "'What is this mystery in me? What is the principle of this mixture of body and soul? How can I be my own friend and my own enemy? Speak to me! Speak to me, my yoke-fellow, my nature! I cannot ask anyone else about you. How can I remain uninjured by you? How can I escape the danger of my own nature? I have made a promise to Christ that I will fight you, yet how can I defeat your tyranny? But this I have resolved, namely, that I am going to master you.'",
        author: 'St. John Climacus'
      },
      {
        quote: "'To-day God invites you to do good; do it therefore to-day. To-morrow you may not have time, or God may no longer call you to do it.'",
        author: 'St. Alphonsus Maria de Liguori'
      },
      {
        quote: "'We shall, therefore, be able to expel this most pernicious passion from ourselves once our mind is occupied constantly with spiritual meditation; then we may raise it up with a hope of things to come and by contemplation of promised blessedness. For we shall be able to overcome every kind of sadness -- whether that which derives from previous anger, or that which befalls us when a loss of money or some other disadvantage strikes us, or that which occurs when some injury has been inflicted on us, or that which proceeds from an irrational turn of mind, or that which brings upon us a deadly despair -- when we are ever rejoicing at the sight of things eternal and to come and when we remain steadfast and are neither cast down by present events nor carried away by good fortune, viewing both as empty and soon to pass.'",
        author: 'St. John Cassian'
      },
      {
        quote: "'We should be careful to preserve great purity of heart in the love of God, loving nothing but Him, and desiring to converse with Him alone, and with the neighbor for love of Him and not for our own pleasure and delight.'",
        author: 'St. Ignatius of Loyola'
      },
      {
        quote: `'If "he who speaks evil of his brother, and judges his brother, speaks evil of the law, and judges the law" (Jas. 4:11), and the law of Christ is love, surely he who speaks evil of Christ's love falls away from it and is the cause of his 
    own perdition.'`,
        author: 'St. Maximos the Confessor'
      },
      {
        quote: `'The saints were particularly cautious not to look at persons of a different sex. St. Hugh, bishop, when compelled to speak with women, never looked at them in the face. St. Clare would never fix her eyes on the face of a man. She was greatly afflicted because, when raising her eyes at the elevation to see the consecrated host, she once involuntarily saw the countenance of the priest. St. Aloysius never looked at his own mother in the face. It is related of St. Arsenius, that a noble lady went to visit him in the desert, to beg of him to recommend her to God. When the saint perceived that his visitor was a woman, he turned away from her. She then said to him: "Arsenius, since you will neither seen or hear me, at least remember me in your prayers." "No," replied the saint, "but I will beg of God to make me forget you, and never more to think of you."'`,
        author: 'St. Alphonsus Maria de Liguori'
      },
      {
        quote: "'O immaculate Virgin, Queen of martyrs! I conjure thee, by the sorrows that thou didst endure during the awful Passion of thy amiable Jesus, give to all of us thy maternal blessing. I place all my spiritual children under the mantle of thy protection.'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'One might pardon, perhaps, some neglect in the service of man, but in the service of God one ought not to bear with it at any price.'",
        author: 'St. Ignatius of Loyola'
      },
      {
        quote: "'Example makes it clear that man is destroyed by his own free choice: for out of love for some worldly thing he throws himself into fire, is drowned in the sea and gives himself into captivity. Let us suppose that someone's house or field has caught fire. The person who wanted to save himself fled without anything as soon as he noticed the fire, leaving everything in it and concerned only with his own life. But someone else thought he would take some of the goods with him, so he stayed behind to collect them; and as he was taking them the fire, which had already overwhelmed the house, caught him as well and burnt him. In this way, through his attachment to some transient thing, he was destroyed in the fire by his own free choice. Again, two men were shipwrecked. One of them, wanting to save himself, stripped off his clothes and threw himself into the water; and in this way he was able to save his life. The other, wanting to save his clothes as well, was drowned, destroying himself for the sake of a slight gain. Or again, let us suppose that news of an attack by an enemy was announced. One man, as soon as he heard the news, fled as fast as his feet would carry him, without a thought for his possessions. Another, either because he distrusted the news, or because he wanted to take with him some of his goods, waited until later, and when the enemy arrived he was caught. Thus, through his lack of alertness and his attachment to worldly things, he lost body and soul by his own free choice.'",
        author: 'St. Symeon Metaphrastis'
      },
      {
        quote: "'Do not pass a single day without visiting the God of the tabernacle; in His presence grieve for the irreverences that He receives from bad Christians, who repay His love with sacrileges and basest ingratitude. In reparation for so many outrages, the loving soul ought to offer herself as a victim, consume herself in the fire of divine love, offer her praises to Jesus on the altar, visit Him for those unhappy souls who fail to do so, visit Him especially at hours when nobody else pays Him homage.'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'Cultivate a tender devotion to the dolors of Mary, to her Immaculate Conception, to your guardian angel, to your patron saints, and the holy apostles.'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'See, my children, a person who is in a state of sin is always sad. Whatever he does, he is weary and disgusted with every thing; while he who is at peace with God is always happy, always joyous. . . Oh, beautiful life! Oh, beautiful death!'",
        author: 'St. Jean Marie Baptiste Vianney, the Cure of Ars'
      },
      {
        quote: "'True love is found only in complete self-forgetfulness, and it is only after we have detached ourselves from every creature that we find Jesus.'",
        author: 'St. Therese of Lisieux'
      },
      {
        quote: "'When you attain true humility of heart and self-contempt ask leave of Jesus to enter His divine Heart, and you will at once obtain it. Place yourself as a victim on that altar, where the fire of divine love is ever burning. Let this sacred flame burn you to the marrow of your bones; then, if the breath of the Holy Spirit raise you to the contemplation of the divine mysteries, leave to your soul the liberty of losing herself in this holy contemplation. Oh, how pleasing to God is this practice!'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: `'When the intellect grows strong, it makes ready to pursue the love which quenches all bodily passions and which 
    prevents anything contrary to nature from gaining control over the heart. Then the intellect, struggling against what is contrary to nature, separates this from what is in accordance with nature. Examine yourself daily in the sight of God, and discover which of the passions is in your heart. Cast it out, and so escape His judgment. Be attentive to your heart and watch your enemies, for they are cunning in their malice. In your heart be persuaded of this: it is impossible for a man to achieve good through evil means. That is why our Savior told us to be watchful, saying:"Strait is the gate, and narrow is the way that leads to life, and few there are that find it (Matt. 7:14)."</I>'`,
        author: 'St. Isaiah the Solitary'
      },
      {
        quote: "'We ought to receive all things as from the hand of God, with resignation and gratitude.'",
        author: 'St. Fulgentius of Ruspe'
      },
      {
        quote: "'He who conceals his hypocrisy beneath feigned love blesses with his mouth but curses inwardly.'",
        author: 'St. Thalassios the Libyan'
      },
      {
        quote: "'Is anyone among you suffering? as the brother of God says, Let him pray. Is anyone sad? Let him sing psalms. Is anyone tempted by evil passion? - since the tempter is always at work - let him endure patiently as he listens to the one who says, Blessed is the one who endures temptation; for when he has been proved, he will receive the crown of life which the Lord has promised to those who love him. If you know these things, blessed are you if you do them, said the Lord, to whom be glory and might, with the Father and the Holy Spirit, now and for ever and to the ages of ages. Amen.'",
        author: 'St. Theodore the Studite'
      },
      {
        quote: "'When the stomach is full, it is easy to talk of fasting.'",
        author: 'St. Jean Marie Baptiste Vianney'
      },
      {
        quote: "'In the sweetness and delight of the soul there is always danger of the devil playing a wicked trick on us.'",   
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'<B>Anselm..</B> Injustice, therefore, if it is canceled by compassion alone, is more free than justice, which seems very inconsistent. And to these is also added a further incongruity, viz., that it makes injustice like God. For as God is subject to no law, so neither is injustice.<BR><BR><B>Boso.</B> I cannot withstand your reasoning. But when God commands us in every case to forgive those who trespass against us, it seems inconsistent to enjoin a thing upon us which it is not proper for him to do himself.<BR><BR><B>Anselm..</B> There is no inconsistency in God's commanding us not to take upon ourselves what belongs to Him alone. For to execute vengeance belongs to none but Him who is Lord of all; for when the powers of the world rightly accomplish this end, God himself does it who appointed them for the purpose.'",
        author: "St. Anselm of Canterbury, 'Cur Deus Homo'"
      },
      {
        quote: "'Just as the intellect of a hungry man imagines bread and that of a thirsty man water, so the intellect of a glutton imagines a profusion of foods, that of a sensualist the forms of women, that of a vain man worldly honor, that of an avaricious man financial gain, that of a rancorous man revenge on whoever has offended him, that of an envious man how to harm the object of his envy, and so on with all the other passions. For an intellect agitated by passions is beset by impassioned conceptual images whether the body is awake or asleep.'",
        author: 'St. Maximos the Confessor'
      },
      {
        quote: "'When I commit any faults, after having punished myself for them by penance, I will offer to the Eternal Father one of the virtues of the divine Heart, in order to repair the outrages of which I have been guilty, and thus little by little pay my debt.'",
        author: 'St. Margaret Mary Alacoque'
      },
      {
        quote: "'St. Joseph was chosen among all men, to be the protector and guardian of the Virgin Mother of God; the defender and foster-father of the Infant-God, and the only co-operator upon earth, the one confidant of the secret of God in the work of the redemption of mankind.'",
        author: 'St. Bernard of Clairvaux'
      },
      {
        quote: "'In dryness as well as in consolations, dangers are encountered if one is not on his guard; if the latter can inspire pride, the former can beget tepidity.'",
        author: 'St. Ignatius of Loyola'
      },
      {
        quote: `'If you have anything against any man, forgive it: you come here to receive forgiveness of sins, and thou also must forgive him that has sinned against you. Else with what face will you say to the Lord, "Forgive me my many sins," if you have not yourself forgiven your fellow-servant even his little sins.'`,
        author: 'St. Cyril of Jerusalem'
      },
      {
        quote: "'Besides pardoning those who persecute us, we ought to feel pity for the delusion they are labouring under.'",   
        author: 'St. Philip Neri'
      },
      {
        quote: "'One who is ill must not wish to do the work of a well man; let him compensate by moderation and patience, and not injure his health.'",
        author: 'St. Ignatius of Loyola'
      },
      {
        quote: "'He has not treated us according to our sins. For we are his children. How do we prove this? The only Son died for us so that he would not remain the only child. He did not want to be alone, who died alone. The only Son of God made many children for God. He bought himself brothers and sisters with his blood; rejected, he accepted us; sold, he bought us back; dishonoured, he honoured us; killed, he brought us life.<BR><BR>So then, my brethren, rejoice in the Lord</I>, not in the world; that is, rejoice in faithfulness and not in iniquity; rejoice in the hope of eternity and not the brief flower of vanity. Rejoice thus, and wherever you are here, as long as you are here, the Lord is very near: do not be anxious about anything.</I>'",
        author: 'St. Augustine'
      },
      {
        quote: "'The truly monk-like intellect is one that has renounced the senses and cannot stand even the thought of sensual pleasure.'",
        author: 'St. Thalassios the Libyan'
      },
      {
        quote: "'A man who is carried away by his thoughts is blinded by them; and while he can see the actual working of sin, he cannot see its causes.'",
        author: 'St. Mark the Ascetic'
      },
      {
        quote: "'How wonderful are the treasures which are enclosed in the divine Eucharist!'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'Rouse thyself, my soul; rouse thyself, and let the fire of a love from heaven blaze in thy inmost parts, and learn thou carefully the dignity bestowed on thee by thy Lord God; and learning, love; and loving, revere. . .'",
        author: 'St. Anselm of Canterbury'
      },
      {
        quote: "'Happy are they who have received Thee today in the Blessed Sacrament, O Jesus. Blessed are the walls of the Church that guard my Jesus. Blessed are the priests, who are always near the most lovable Jesus.'",
        author: 'St. Mary Frances of the Five Wounds'
      },
      {
        quote: "'Let us learn here below to give God the confession of praise which we ought to hope to give Him in heaven above.'",
        author: 'St. Philip Neri'
      },
      {
        quote: "'When a spiritual person feels a great calmness of mind in asking anything of God, it is a good sign that God either has granted it, or will do so shortly.'",
        author: 'St. Philip Neri'
      },
      {
        quote: "'All novelty in faith is a sure mark of heresy.'",
        author: 'St. Vincent of Lerins'
      },
      {
        quote: "'And if any of the events which happen pass our understanding, let us not from this consider that our affairs are not governed by Providence, but perceiving His Providence in part, in things incomprehensible let us yield to the unsearchableness of His wisdom.'",
        author: 'St. John Chrysostom'
      },
      {
        quote: "'When the intellect through rejection of the passions attains to unwavering hope, then the enemy makes it visualize its past sins on the pretext of confessing them to God. Thus he tries to rekindle passions which by God's grace have been forgotten, and so secretly to inflict injury. Then, even though someone is illumined and hates the passions, he will inevitably be filled with darkness and confusion at the memory of what he has done. But if he is still befogged and self-indulgent, he will certainly dally with the enemy's provocations and entertain them under the influence of passion, so that this re-collection will prove to be a prepossession and not a confession.'",
        author: 'St. Mark the Ascetic'
      },
      {
        quote: "'The soul has followed Moses and the cloud, both of these serving as guides for those who would advance in virtue; Moses here represents the commandments of the Law; and the cloud that leads the way, its spiritual meaning. The soul has been purified by crossing the Sea; it has removed from itself and destroyed the enemy army. It has tasted of the waters of Marah, that is, of life deprived of all sinful pleasure; and this at first had seemed bitter and unpleasant to the taste but offered a sensation of sweetness to those who accepted the wood. Next it enjoyed the beauty of the palm trees of the gospel and the springs; it filled itself with the living water, that is, the rock. It took within itself the bread of heaven. It overwhelmed the foreign host - a victory due to the extended arms of the Lawgiver, which thus foreshadowed the mystery of the Cross. Only then can the soul go on to the contemplation of transcendent Being.'",
        author: 'St. Gregory of Nyssa'
      },
      {
        quote: "'We have no time to go to sleep here, for Paradise was not made for poltroons.'",
        author: 'St. Philip Neri'
      },
      {
        quote: "'Be not judge in your own case, but distrust yourself, and adore the Father of lights in spirit and in truth. It is written: Happy the man who always fears!'",
        author: 'St. Paul of the Cross'
      },
      {
        quote: "'Rejoice, O Virgin Mary! Rejoice a thousand times!'",
        author: 'St. Louis Marie de Montfort'
      },
      {
        quote: "'An unjust law is no law at all.'",
        author: 'St. Augustine'
      }
];

module.exports = quotes;