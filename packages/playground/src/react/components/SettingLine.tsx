import React, { SVGProps } from "react";

export function SettingLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
            {...props}
        >
            <path
                fill="currentColor"
                d="m14.1361 3.3614.9951-.0995-.9951.0995Zm-.1523-.8198L13.095 3l.8888-.4584Zm.4473 2.2763.795-.6065-.795.6065Zm.9284.3846-.1334-.991.1334.991Zm1.2384-.8214.6332.774-.6332-.774Zm.6874-.472.3043.9526-.3043-.9525Zm.7019.035.3976-.9175-.3976.9176Zm.6371.5381-.7071.7071.7071-.7071Zm.8935.8935.7071-.7071-.7071.707Zm.538.637.9175-.3975-.9175.3975Zm.035.702.9526.3043-.9526-.3044Zm-.472.6874-.7739-.6332.7739.6332Zm-.8213 1.2385-.9911-.1334.9911.1334Zm.3845.9283-.6065.7951.6065-.795Zm1.4565.295.0995-.995-.0995.995Zm.8199.1523.4584-.8887-.4584.8887Zm.4715.5211.93-.3677-.93.3677Zm.0001 2.9253L21 13.095l.93.3676Zm-.4717.5212.4583.8888-.4583-.8888Zm-.8197.1523-.0995-.995-.0326.0033-.0323.0053.1644.9864Zm0 0 .0995.9951.0326-.0033.0323-.0054-.1644-.9864Zm-1.4561.2948-.6063-.7952.6063.7952Zm-.3846.9287-.9911.1335.9911-.1335Zm.8211 1.238-.774.6332.774-.6332Zm.4718.6872-.9525.3044.9525-.3044Zm-.035.7021-.9175-.3977.9175.3977Zm-.5379.6369.7071.7071-.7071-.7071Zm-.8936.8936-.7071-.7072v.0001l.7071.7071Zm-.637.538.3976.9175-.3976-.9175Zm-.7019.035-.3044.9525.3044-.9525Zm-.6875-.472.6333-.774-.0086-.0068-.6247.7808Zm0 0-.6333.774.0086.0069.6247-.7809Zm-1.2384-.8213.1333-.9911-.1333.9911Zm-.9284.3845.7951.6066v-.0001l-.7951-.6065Zm-.2949 1.4567-.9951-.0995.9951.0995Zm-.1525.8202L13.095 21l.8887.4585Zm-.5209.4714L13.095 21l.3678.9299Zm-2.9255 0L10.905 21l-.3677.9299Zm-.5211-.4715L10.905 21l-.8888.4584Zm-.1524-.8199-.995.0996.995-.0996ZM9.569 19.182l-.795.6065.795-.6065Zm-.9283-.3845-.1333-.9911.1333.9911Zm-1.2385.8214-.6333-.774-.0158.013-.0153.0135.6644.7475Zm0 0 .6332.7739.0158-.0129.0153-.0136-.6643-.7474Zm-.6875.4719.3043.9526-.3043-.9526Zm-.7019-.035-.3975.9176.3975-.9176Zm-.637-.538.707-.7071-.707.7071Zm-.8935-.8935-.7071.7072.707-.7072Zm-.538-.637.9175-.3976-.9176.3976Zm-.035-.7019.9525.3043-.9526-.3043Zm.4719-.6875.774.6332-.774-.6332Zm.8214-1.2385.991.1334-.991-.1334Zm-.3846-.9283.6066-.7951-.6066.7951Zm-1.4565-.295-.0995.9951.0995-.9951Zm-.8198-.1523L3 13.095l-.4584.8888Zm-.4715-.5211-.93.3677.93-.3677Zm0-2.9255-.93-.3678.93.3678Zm.4714-.5209-.4585-.8887.4585.8887Zm.82-.1525v-1h-.0498l-.0497.005.0995.995Zm0 0v1h.05l.0496-.0049-.0995-.995Zm1.457-.295-.6067-.795.6066.795Zm.3844-.9281.991-.1332-.991.1332Zm-.8216-1.2389.774-.6332-.774.6332Zm-.4722-.6877.9526-.3042-.9526.3041Zm.035-.7017-.9176-.3974.9176.3974Zm.5382-.6373.7071.7071-.707-.7071Zm.8933-.8933-.707-.7071.707.707Zm.6372-.538-.3976-.9177.3976.9176Zm.7018-.035.3043-.9527-.3043.9526Zm.6876.472.6332-.774-.6332.774Zm1.2382.8213.1335-.991-.1335.991Zm.9287-.3847L8.774 4.211l.7952.6064Zm.2948-1.456.995.0994-.995-.0995Zm.1523-.8197-.8888-.4583.8888.4583Zm.5212-.4717.3676.93-.3676-.93Zm2.9253 0 .3677-.9299-.3677.93Zm1.6685 1.192c-.0204-.2037-.04-.405-.0686-.5752-.0302-.18-.0798-.3897-.1901-.6036L13.095 3c-.0229-.0445-.0181-.0612-.0048.018.015.089.0279.2129.0509.443l1.9901-.199Zm.0949.9494c.0633.083.0432.1196.0081-.0755-.0334-.1855-.0603-.4468-.103-.874l-1.9901.199c.0394.3937.0741.748.1247 1.0293.0489.2716.1351.6261.3702.9343l1.5901-1.213Zm0 0-1.5901 1.213a2 2 0 0 0 1.8568.7691l-.2667-1.982Zm.7385-.6042c-.3323.2718-.536.4376-.6908.5452-.1627.113-.151.073-.0477.059l.2667 1.9821c.384-.0516.6957-.2413.9224-.3988.2346-.163.5097-.3891.8159-.6396l-1.2665-1.548Zm1.0164-.6506c-.2292.0732-.4126.1865-.5612.2924-.1405.1-.2968.2286-.4552.3582l1.2665 1.5479c.1789-.1464.2757-.2249.3492-.2773.0654-.0466.057-.0313.0093-.016l-.6086-1.9052Zm1.4038.07a2 2 0 0 0-1.4038-.07l.6086 1.9051.7952-1.835Zm.9466.7485c-.1447-.1447-.2874-.2881-.4172-.4017-.1374-.1202-.3086-.2511-.5294-.3468l-.7952 1.8351c-.0459-.0199-.0527-.0359.0077.017.068.0594.1564.1471.3199.3106l1.4142-1.4142Zm.8935.8935-.8935-.8935-1.4142 1.4142.8935.8935 1.4142-1.4142Zm.7484.9466c-.0956-.2208-.2266-.392-.3467-.5294-.1136-.1298-.257-.2725-.4017-.4172l-1.4143 1.4142c.1635.1635.2512.2519.3107.3198.0529.0605.0368.0537.0169.0077l1.8351-.7951Zm.0701 1.4037a1.9998 1.9998 0 0 0-.0701-1.4037l-1.8351.7951 1.9052.6086Zm-.6506 1.0164c.1296-.1583.2581-.3146.3582-.4551.1059-.1486.2191-.332.2924-.5612l-1.9052-.6087c.0153-.0477.0305-.056-.0161.0094-.0524.0735-.1308.1702-.2772.3492l1.5479 1.2664Zm-.6043.7386c-.0139.1033-.054.115.0591-.0477.1075-.1548.2733-.3586.5452-.6909l-1.548-1.2663c-.2506.3062-.4766.5813-.6397.816-.1575.2266-.3471.5383-.3988.9223l1.9821.2667Zm0 0-1.9821-.2666a2 2 0 0 0 .7691 1.8567l1.213-1.5901Zm.9495.095c-.4272-.0428-.6885-.0697-.874-.103-.1951-.0352-.1584-.0553-.0755.008l-1.213 1.5901c.3081.235.6626.3213.9343.3702.2812.0506.6356.0853 1.0292.1247l.199-1.99Zm1.1788.2586c-.2138-.1103-.4236-.16-.6036-.1901-.1701-.0286-.3715-.0482-.5752-.0686l-.199 1.9901c.2301.023.354.0359.443.0509.0792.0133.0625.0181.018-.0048l.9168-1.7775Zm.9431 1.0421a1.9998 1.9998 0 0 0-.9431-1.0421L21 10.905l1.8599-.7354Zm.14 1.1986c0-.2046.0005-.4069-.011-.5791-.0121-.1821-.0406-.3958-.1291-.6195L21 10.905c-.0184-.0466-.0119-.0627-.0065.0174.006.0901.0065.2146.0065.4458h2Zm0 1.2637v-1.2637h-2v1.2637h2Zm-.14 1.1983c.0884-.2237.1169-.4373.129-.6194.0115-.172.011-.3743.011-.5789h-2c0 .2311-.0005.3556-.0065.4457-.0054.0801-.0119.064.0065.0174l1.86.7352Zm-.9434 1.0424a2.0002 2.0002 0 0 0 .9434-1.0424L21 13.095l.9166 1.7776Zm-1.1785.2586c.2036-.0204.405-.04.5751-.0686.1799-.0302.3896-.0798.6034-.19L21 13.095c.0445-.0229.0612-.018-.018-.0048-.089.015-.2129.0279-.4429.0509l.199 1.9901Zm.0649-.0087-.3288-1.9728.3288 1.9728Zm-1.0141.1036c-.0829.0632-.1196.0431.0755.008.1854-.0334.4466-.0602.8737-.1029l-.199-1.9901c-.3935.0394-.7478.074-1.0289.1246-.2716.0489-.626.1351-.934.37l1.2127 1.5904Zm0 0-1.2127-1.5904a2 2 0 0 0-.7694 1.8574l1.9821-.267Zm.604.7382c-.2717-.3321-.4374-.5358-.545-.6905-.1131-.1627-.0729-.151-.059-.0477l-1.9821.267c.0517.3839.2413.6955.3988.9221.163.2345.389.5095.6394.8156l1.5479-1.2665Zm.6504 1.016c-.0732-.229-.1864-.4124-.2923-.561-.1-.1404-.2285-.2966-.3581-.455l-1.5479 1.2665c.1464.1789.2248.2756.2772.3491.0466.0654.0313.057.0161.0093l1.905-.6089Zm-.07 1.4043a2.0002 2.0002 0 0 0 .07-1.4043l-1.905.6089 1.835.7954Zm-.7483.9463c.1447-.1447.2881-.2873.4016-.4171.1201-.1373.251-.3085.3467-.5292l-1.835-.7954c.0199-.0459.0359-.0527-.017.0077-.0594.0679-.1471.1563-.3105.3198l1.4142 1.4142Zm-.8936.8936.8936-.8936-1.4142-1.4142-.8936.8935 1.4142 1.4143Zm-.9465.7484c.2207-.0956.392-.2266.5293-.3467.1298-.1136.2725-.257.4172-.4017l-1.4142-1.4142c-.1635.1634-.2519.2511-.3198.3106-.0605.0528-.0537.0368-.0077.0169l.7952 1.8351Zm-1.4039.07c.461.1473.9598.1224 1.4039-.07l-.7952-1.8351-.6087 1.9051Zm-1.0163-.6505c.1584.1296.3146.2581.4551.3582.1486.1059.3321.2191.5612.2923l.6087-1.9051c.0477.0152.056.0305-.0094-.0161-.0735-.0524-.1702-.1308-.3491-.2772l-1.2665 1.5479Zm.0085.0069 1.2494-1.5617v-.0001l-1.2494 1.5618Zm-.747-.6112c-.1034-.0139-.1151-.054.0476.0591.1548.1075.3586.2733.6909.5452l1.2664-1.5479c-.3061-.2506-.5812-.4766-.8159-.6397-.2266-.1575-.5383-.3471-.9224-.3988l-.2666 1.9821Zm0 0 .2666-1.9821a2.0002 2.0002 0 0 0-1.8568.7691l1.5902 1.213Zm-.095.9497c.0427-.4273.0696-.6886.103-.8742.0351-.1951.0552-.1584-.008-.0754l-1.5902-1.2131c-.235.3081-.3213.6627-.3702.9343-.0506.2813-.0853.6357-.1247 1.0294l1.9901.199Zm-.2588 1.1792c.1104-.2139.16-.4238.1902-.6038.0286-.1702.0482-.3717.0686-.5754l-1.9901-.199c-.023.2302-.0359.3541-.0509.4432-.0133.0792-.0182.0625.0048.018l1.7774.917Zm-1.0418.9428a1.9998 1.9998 0 0 0 1.0418-.9428L13.095 21l.7356 1.8598ZM12.6316 23c.2047 0 .4071.0005.5793-.011.1821-.0122.3959-.0407.6197-.1292L13.095 21c.0466-.0184.0627-.0119-.0174-.0065-.0901.006-.2147.0065-.446.0065v2Zm-1.2634 0h1.2634v-2h-1.2634v2Zm-1.1986-.1401c.2237.0885.4374.117.6195.1291.1722.0115.3745.011.5791.011v-2c-.2312 0-.3557-.0005-.4458-.0065-.0801-.0054-.064-.0119-.0174.0065l-.7354 1.8599Zm-1.0421-.9431c.2218.4301.592.7652 1.0421.9431L10.905 21l-1.7775.9168Zm-.2587-1.1787c.0204.2036.04.405.0686.5751.0302.18.0798.3898.1901.6036L10.905 21c.0229.0445.0181.0612.0048-.018-.015-.089-.0279-.2129-.0509-.443l-1.99.1991Zm-.095-.9496c-.0632-.0829-.043-.1196-.008.0755.0334.1855.0603.4468.103.8741l1.9901-.1991c-.0394-.3936-.0741-.748-.1247-1.0292-.0489-.2717-.1352-.6262-.3702-.9343l-1.5901 1.213Zm0 0 1.5902-1.213a2 2 0 0 0-1.8567-.7691l.2666 1.9821Zm-.7385.6043c.3323-.2719.5361-.4377.6909-.5452.1627-.1131.151-.073.0477-.0591l-.2666-1.9821c-.3841.0516-.6958.2413-.9225.3988-.2347.1631-.5098.3892-.816.6397l1.2665 1.5479Zm.0311-.0265-1.3287-1.4949v.0001l1.3287 1.4948Zm-1.0475.6771c.2292-.0732.4126-.1865.5612-.2924.1405-.1001.2968-.2286.4552-.3582l-1.2665-1.5479c-.179.1464-.2756.2249-.3492.2773-.0654.0466-.057.0313-.0093.0161l.6086 1.9051Zm-1.4038-.07c.444.1924.9428.2173 1.4038.07l-.6086-1.9051-.7952 1.8351Zm-.9466-.7485c.1447.1447.2874.2881.4173.4017.1373.1202.3086.2511.5293.3468l.7952-1.8351c.046.0199.0527.0359-.0077-.017-.068-.0594-.1564-.1471-.3199-.3106l-1.4142 1.4142Zm-.8934-.8934.8934.8934 1.4142-1.4142-.8934-.8935-1.4142 1.4143Zm-.7485-.9467c.0956.2208.2266.392.3467.5294.1136.1298.257.2726.4018.4173l1.4142-1.4143c-.1635-.1634-.2512-.2519-.3107-.3198-.0528-.0605-.0368-.0537-.0169-.0077l-1.8351.7951Zm-.07-1.4037a1.9998 1.9998 0 0 0 .07 1.4037l1.8351-.7951-1.9051-.6086Zm.6505-1.0164c-.1295.1583-.258.3146-.3582.4551-.1059.1486-.2191.3321-.2923.5613l1.9051.6086c-.0152.0477-.0305.056.016-.0094.0525-.0735.131-.1702.2774-.3492l-1.548-1.2664Zm.6043-.7386c.0139-.1033.054-.115-.059.0477-.1076.1548-.2734.3586-.5453.6909l1.548 1.2664c.2505-.3062.4765-.5813.6396-.8159.1575-.2267.3472-.5384.3989-.9224l-1.9822-.2667Zm0 0 1.9821.2667a2 2 0 0 0-.769-1.8568l-1.2131 1.5901Zm-.9495-.0949c.4273.0427.6885.0696.874.103.1951.0351.1584.0552.0755-.0081l1.213-1.5901c-.308-.2351-.6626-.3213-.9342-.3702-.2813-.0506-.6356-.0853-1.0293-.1247l-.199 1.9901Zm-1.1787-.2587c.2138.1103.4236.1599.6036.1901.1701.0286.3715.0482.5751.0686l.199-1.9901c-.23-.023-.3539-.0359-.443-.0509-.0791-.0133-.0624-.0181-.0179.0048l-.9168 1.7775Zm-.9431-1.0421a2 2 0 0 0 .9431 1.0421L3 13.095l-1.86.7354ZM1 12.6318c0 .2046-.0005.4069.011.5791.0121.1821.0406.3957.129.6195L3 13.095c.0184.0466.0119.0627.0065-.0174C3.0005 12.9875 3 12.863 3 12.6318H1Zm0-1.2635v1.2635h2v-1.2635H1Zm.1402-1.1989c-.0885.2238-.117.4376-.1292.6197-.0115.1722-.011.3746-.011.5792h2c0-.2312.0005-.3558.0065-.4459.0054-.0801.012-.064-.0065-.0174l-1.8598-.7356Zm.9428-1.0418a2 2 0 0 0-.9428 1.0418L3 10.905l-.917-1.7774Zm1.179-.2588c-.2036.0204-.405.04-.5752.0686-.18.0302-.3899.0798-.6037.1902L3 10.905c-.0445.023-.0612.0181.018.0048.089-.015.213-.0279.443-.0509l-.199-1.99Zm.0995-.005v2-2Zm0 0v2-2Zm.8503-.09c.083-.0633.1196-.0431-.0755-.008-.1856.0334-.447.0603-.8743.103l.199 1.9901c.3938-.0394.7483-.0741 1.0296-.1247.2717-.0489.6263-.1353.9345-.3704l-1.2133-1.59Zm0 0 1.2133 1.59a2 2 0 0 0 .7689-1.8563l-1.9822.2663Zm-.6045-.7387c.272.3324.4378.5362.5454.691.1132.1628.073.1511.059.0477l1.9823-.2663c-.0517-.3842-.2414-.696-.399-.9227-.163-.2347-.3892-.51-.6398-.8162L3.6073 8.035Zm-.6508-1.0169c.0732.2293.1865.4128.2925.5615.1001.1406.2287.2969.3583.4554l1.548-1.2665c-.1465-.179-.225-.2758-.2775-.3494-.0466-.0654-.0313-.057-.016-.0093l-1.9053.6083Zm.07-1.4032a2 2 0 0 0-.07 1.4032L4.8617 6.41l-1.8352-.795Zm.7487-.947c-.1447.1447-.2882.2875-.4019.4174-.1201.1374-.2511.3087-.3468.5296l1.8352.7949c-.0199.046-.0359.0527.017-.0077.0595-.068.1472-.1565.3107-.32L3.7752 4.668Zm.8933-.8933-.8933.8933 1.4142 1.4142.8934-.8933-1.4143-1.4142Zm0 0 1.4143 1.4142-1.4143-1.4142Zm.9467-.7485c-.2208.0956-.392.2266-.5294.3467-.1298.1136-.2725.257-.4173.4018l1.4143 1.4142c.1635-.1635.2519-.2512.3198-.3107.0605-.0528.0537-.0368.0077-.0169l-.7951-1.8351Zm1.4037-.07a2 2 0 0 0-1.4037.07l.7951 1.8351.6086-1.9052Zm1.0165.6506c-.1584-.1296-.3147-.2581-.4552-.3583-.1486-.1059-.332-.2191-.5613-.2924l-.6086 1.9052c-.0477-.0152-.056-.0305.0094.0161.0735.0524.1703.1309.3493.2773l1.2664-1.5479Zm.7385.6042c.1034.014.115.054-.0477-.059-.1548-.1076-.3585-.2734-.6908-.5452L6.769 5.1548c.3061.2504.5812.4764.8158.6395.2266.1575.5382.3471.9222.3988l.267-1.982Zm0 0-.267 1.9821a2 2 0 0 0 1.8573-.7693L8.7739 4.211Zm.095-.9492c-.0428.4271-.0696.6883-.103.8738-.0351.195-.0552.1583.008.0754l1.5903 1.2128c.235-.308.3212-.6624.3701-.934.0506-.2812.0853-.6354.1246-1.029l-1.99-.199Zm.2585-1.1784c-.1102.2138-.1598.4235-.19.6034-.0286.1701-.0482.3714-.0686.575l1.9901.199c.023-.23.0359-.3538.0509-.4428.0132-.0792.0181-.0625-.0048-.018l-1.7776-.9166Zm1.0424-.9434a2 2 0 0 0-1.0424.9434L10.905 3l-.7352-1.86ZM11.3681 1c-.2046 0-.4069-.0005-.5789.011-.1821.0121-.3957.0406-.6194.129L10.905 3c-.0466.0184-.0627.0119.0174.0065.0901-.006.2146-.0065.4457-.0065V1Zm1.2637 0h-1.2637v2h1.2637V1Zm1.1986.1401c-.2238-.0885-.4374-.117-.6195-.1291C13.0387.9995 12.8364 1 12.6318 1v2c.2312 0 .3557.0005.4458.0065.0801.0054.064.012.0174-.0065l.7354-1.8599Zm1.0421.9431a2 2 0 0 0-1.0421-.9431L13.095 3l1.7775-.9168ZM15 12c0 1.6569-1.3431 3-3 3v2c2.7614 0 5-2.2386 5-5h-2Zm-3-3c1.6569 0 3 1.3431 3 3h2c0-2.7614-2.2386-5-5-5v2Zm-3 3c0-1.6569 1.3431-3 3-3V7c-2.7614 0-5 2.2386-5 5h2Zm3 3c-1.6569 0-3-1.3431-3-3H7c0 2.7614 2.2386 5 5 5v-2Z"
            />
        </svg>
    );
}
export default SettingLine;
