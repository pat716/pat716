/**
 * Created by psweeney on 6/15/17.
 */

var impressionistSlide = 0, impressionistSlideCount = 8, donationSlide = 0, donationSlideCount = 9;
var projectSlideFadeDuration = 400, projectSlideFadeEasing = "swing";

function projectTabSetup(){
    impressionistSlide = 0;
    donationSlide = 0;

    var impressionistImageUrl = getImageUrlForProjectPanelState("impressionist", 0);
    var donationImageUrl = getImageUrlForProjectPanelState("donation", 0);

    $("#impressionistProjectImage").attr("url", impressionistImageUrl);
    $("#impressionistProjectBackgroundImage").fadeOut(0, projectSlideFadeEasing);
    $("#donationProjectImage").attr("url", donationImageUrl);
    $("#donationProjectBackgroundImage").fadeOut(0, projectSlideFadeEasing);
    $("#impressionistProjectText").html(getTextForProjectPanelState("impressionist", 0));
    $("#donationProjectText").html(getTextForProjectPanelState("donation", 0));
}

function getSlideNum(projectId){
    switch (projectId){
        case "impressionist":
            return impressionistSlide;
        case "donation":
            return donationSlide;
    }
    return 0;
}

function incrementSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide = getBoundedSlideNum(projectId, impressionistSlide + 1);
            break;
        case "donation":
            donationSlide = getBoundedSlideNum(projectId, donationSlide + 1);
            break;
    }
}

function decrementSlide(projectId){
    switch (projectId){
        case "impressionist":
            impressionistSlide = getBoundedSlideNum(projectId, impressionistSlide - 1);
            break;
        case "donation":
            donationSlide = getBoundedSlideNum(projectId, donationSlide - 1);
            break;
    }
}

function getSlideCount(projectId){
    switch (projectId){
        case "impressionist":
            return impressionistSlideCount;
        case "donation":
            return donationSlideCount;
    }
    return 0;
}

function getBoundedSlideNum(projectId, slideNum){
    return Math.max(0, Math.min(getSlideCount(projectId) - 1, slideNum));
}

function getImageUrlForProjectPanelState(projectId, slideNum){
    switch (projectId){
        case "impressionist":
            switch (slideNum){
                case 0: return "https://lh3.googleusercontent.com/1-ZRoKgW0HxeAuVo5zzkPkgxBf3Pvj2hWyfCryJGciAEC89-iOjcaPVe7OuTt7d41jMFEfpZuSS9syJXj68tkZfFkMDRudx0XD88bJHvYcoYxAPTzMFd3-w6pVg3uHpFjF4cN0QSaRiStWgekSMh1S_SJ6f3bNsFVl3e12AZ0yW4tclKzWlnTGzWjNSZ6N6QlazWZY7UiDzpt0nTVtFt5_XRceGOtk_rp8rAy7VdkxJLP_c-xmS9_k4wuUVErxIL05qC3ewWdhSJyVUlJWX4qlOzGR1XZK6vBvEFdQ8sjmB8KtBSJByt4Fope85JpJkMxGY93NnWZ0Rev67TwkhTi3s7TXj_oCDi2RSKdlWjti7lJGYkmV4klTYLn8AcNJ6d1a_avqaBnBc4QEQPvrrXSarfuQepltH3U5R9qEfWCusjRaaX0HcVrcrh_V3coYlUJb7wGtmxPUbvZciGPTpF4EhnQ_igrW0Ct2e5kT4VFdheU-8wp6io8HniSLvoDc83BSHkkhgOZKjZmiyHGFDgiMsNMH3tsVMsd4onH2vvKenCrMAcs7wSQTgnetw3QFqkD--ZOi7UB4WX_Qsq6ZMVL5HuQUVXsKrYds0KGxpIDST5BR27EhZungbGo4ZW9lrowiSU2O88DgAGEF7W6IOsaCkl7ZzRmowdAonuUmnkFWgcW1M=w1059-h794-no";
                case 1: return "https://lh3.googleusercontent.com/9L7sm6qA-uOm09UAPvGwNUmzWLkHFxrfMX3UkrwK2CT1XsxKnmFAV8C-4JlDSwU4-yAR1O-gPkoMF_2fh7n5Gb5P7U-q6X-QuuG94xdSCoGIj0BqMPcy-CQ1EdV3Kduak7npiPHn0OXg8EUxal3WNJGAsJGkoQvTIlrUr5DsTH9EIy3e2tEeZFSQN9MvlATRwsvfwasHHYAl0MutaCfPciDr4lJpsT2N9MEZZjKk3NrKBv-URyqPm06Fjs26aPnWSTG8IcteOAh3j18p9Q2UMhjmnVUiz-J9MNwtCviynKqBKaJk1QInsTHHhM8OiPGS0VD6ezq_qq0zlZcPi1N6VBJphXBexlkWgC9lxZrgqoRRe91gL2QrKwWpqWSsTVwwv7-_nRLXU8re3a6IfF6NgkgHk3iz0gNNiTKNgLOnrsXdH03E62ZooeJ845ALXHp-7vCeAKsQhqPJOI6Q7tHxaIT-wEFiqP3jj5y3Be5YxGXO8brCDh3xhTfNb1G8oF3fYTKyMIkApDUqr9CQxazPxWutIY-JDzBNDJPc3BRO_FxUOrdfR3y1xygBmXMTIc06Z60EgAS6cORq7RN_72kNYX-Ruf8PiKNjSp1AT6vNFzRWxMek700UntjTRlo--PSAmCvPZEd7kLU4ahnHMokdXbpxkISFHp2-u0PvuXPzqnn1CYg=w1059-h794-no";
                case 2: return "https://lh3.googleusercontent.com/CR7fTBjidphfJ2MiEo3NK7qvTV2SDpTPsUuuzGof60igUhPV6Vx_fTuKnPTj0Rb-bGG-ULoXC2SYBd31oDTSdzBab8H4nw-RJ751ZCwilWcH8pNH0SPEfU9IiKVR6h5L2U0wED_Q0s-bO7GTQcTl0CWNFV1t7RroP7M51I9UL7r9GSyakay417SaaFS0UmJa9WgRy1Ia1qBMFnqSBknUd8KcI6db9KQ-G5LBXGT7TwhUAphF-_yx9E57bSMa4clplgbCbP4R-l431GLRz-znEJQZaY8nNQH3ZurPixmgmI5CrXvAhVHk1oNVWqokUJ4CbCnnB2yh0uRcr__-ZWcFL8YmdWeaIZyQRFphJnBfR7JSqjKXDI0ndwBnOrJpcMRuYCUq3fgUp_GADZNEc9QdVD4go1riUdyq8C5XAcYKonxqGSDt1HiDdBNM6YELBZSDQ1q_iMkQvfF7dO8rhsXYaE7RntzsNaF009LvXTiVDppPehy6gYnGETR2QkfUx9Mu50tQWjA-G7mHUlboWJZHNqtI1CSDUfBlgTdQgQu7D8-1fcbdRCr1NNvTof8z-FgRSOpWQVtRL9vDywj954fqePtwW_g29dLOQWPhf9ErcHEDdVMoINgWwphZSOVmhNZPfntlQZmmGs1_40GnItmNYxP26GuDzIsEjhPrYyQopvAseL4=w1059-h794-no";
                case 3: return "https://lh3.googleusercontent.com/WpeXuGpuN5X-Q0Nkk2Ag7Q8Z1XYnzrO-LJDBJSEg1iNlO885Acra52ileV22GdtUxMk6fQsUDRAf2A4wLJ9gp-zKGaBmzkc7ixI7kbjphY4Z_4y4vi_IsZRw-xbuEKVBjUrEtYVD3RTfxV6TsolkK4Cd2SBKuq5Cy2ajjPDeEj33X55Jd5FE9_Yp1kd5NXlAxCOyu4rU2S1WFSfgz7YHx-ginK3D61BX4FYQxK_uJYespfYxD4fKi1-eCkT2SwUDFmlOqKAUXLO0HRmcUwXZWfFF_P9i4qTjyV5-KyBDkaV5jEZUlZ48_yfZSaP-lKc6M4KoY5W--aPv-rsvDakXe1iYlOcZScCi3cS9tlR85UFLVkjA3L8qlqOeDakAEr_YbiegexeOmargaSuD1PaA0dOJrV3z0WoCpDY6Q08mGFNxV8msuFExiIr9o6I-hHat8eo-gcthecT6-8OOfAKzUshRcYMImRBVriZzUZ43t9BjilF4xoaK75W4Blgv7VeJVLCTOqQnGdtHc0LkFDNNoHEiVIPoC--QFZWyO57ncpSqnfIxKlJV7gwofH6E85Iccl2A5s-LG3ECVjyM015I6D02oMonVjN5suFdu6jD5P7-hXfp2I5AaIrQqdh5Kh-xQDYwVQS92brnf9iY1vWM3U54yBGZAXptSVWrwo_3S2C1YSM=w847-h635-no";
                case 4: return "https://lh3.googleusercontent.com/D-M7gPNYZj12iPewyz9c3Ls5sy3xol6DlTzILWjSndzsaIcMArOlPYmc6f9Hx9K7xh1kPMYycrNs9I3-tMcaSLqtKIbXp7VmkQxsZy-9IJrxWAiCxo4OayDlZgd5mrfm2U5hre7XxmhAe1ntJqMb9dOssJcyZ2V-caDsa2AcBs4kNttuF_5TGnR5OS4uKsIQ51RUJbvwhwaeEjXZoMPvwgaX7SKwLZUvsDUoBvWDR4dMYARf5J_E3sZj9yQv640iUvdJTcYiCBssLqLGQbnNkkDohwRp9JY1i0HVu7wDRngJHR_OJCez4BLQ5I2I7yEQRHHsPHDvBsXTjxYfd66jfrKGRAqRRAuV53360_dzszfs_736P958JDTBBNaZiF4e1joIm2yA_fVjCl9vl5W7B0XuELYkGI8of-zktfNs50J_A1ZIQZb088yEN6e7-Tp5u2n2twiFGDPCCfq3JVGLdEntTEBSkCU4O6sk8EwkeZloIQGO3Nq8p4K029Y_KvSUxbCf_8-1r_XJLwDXXrdXBukhn_ZQ-gcdt-tiNJl5snqCQRycu4P99scQShuQU5926faL6Z2EWR7ndEB9nuua5ywAaa35_3RyNV0eFWSh_3h8u-_iGq3jASIHdFkToW76KPOkK8F-CsRCjuwaIeMycTLPinur00TnJFGoAXbLrKWIcwg=w1059-h794-no";
                case 5: return "https://lh3.googleusercontent.com/HEEi2ygLWcr1-XtdWcXTZgQM0JkEwdH9EUSpVGyF8yrZAOBsECDWil0014ql4naqxxE2qDnsTBRLudPd440oSq2Jft3ssSA2XuTUxIy-6YJAej2unXuUfD3P5EbtM3KdY25nKJajP54ZZUE7OZQBkCv6Yxy9ZDTX1zZyShtKbu3rXssDk1wMsQoDhPHmkUF9ZBXJM0TXdkbe4xTxrwzkmWdI85Q7d2TQGTpjWaGa9GIDSuBKTvlcTxAxlKwkJDDVsWtV4_O_98G8CxeHLEBWSE-V4GhvxUPKsNb0BfGk4HDIV80i1QvAvOYPeUktLapcqJDBdDT1YHusQK0Yr_oc60a1jvQijs-p2X291lYo0JQi4uCnjGf_jy5d5s8qXuTQFvvr791TvuEQGS1IhlX9a9obmP5SA6JMV82gBbPQN1wZjZCGhb-d93L734Q6mQ9TmOhLQH9PrF0BBfnDsTR1DygGGd3q5K_UqJaHDT8IuZDfmcAo2HvMReMcOq-NvlNQcSBU5I0P7CvgWL7vhXQQwVEIEhVkQtAV9irQ75IL3oQAyVB4h4thxcsEEK0dNNhLdTaHxJ275RmK0IozLnTgCWiAH5fNk38t8w3SYZlIIMSz_uOtFAd6-vvLRbljUZJ0W-TivnamDXEo3M1-2WRjA_3fs8IRbZk2tODfMLHRnnWokV4=w847-h635-no";
                case 6: return "https://lh3.googleusercontent.com/toMy7esybOdc1didKUAh07d9BKiOjROMn7CawjoNCkFLHhReRcwCgnHQDhy5i4rLlBjlWFh0YQFsdciIO2HaqE6y9jnTUNwxKoQKupMCjLQszaYcYyL-oNg-Afz9-jAOkN55ZqWkaz-hrE8tvXMFHebX9hdNGcmkhE-lI6aYnAmFEd2RZi7zVxJT5IDF8scYLdLAI3Sahl-A8NCKhhZgVW4aqjFr_9hRhqOPDED07yS63e_Q6ntuyOxdE5Ty9QFFYGG7_PfKQuuCrDvSfDlQzoRPPBf6GjNwbSXe9ttOIMk0WYSA38wHlEnAoSHuMMLpppRvX9fRtR9eyW_VCUeNhN3I9AOs0obQNBlkEuEI-YcUjBBiO6ydKXwzgj5JnwxIGZBWjhk3zfQFoo59WbrmcHzT5UXofDOK5ODKasdBvRRlxaKNfFi4VqrJZHY4dq8hEZ_DmZH28kTD4fvGms0yaGqjrr4qT0YnLhisLrK_yWnaatqh4_93zTx7Q-mxHXn7-JfhE9Hn6jfIA2LtN0k2OFVJWmqWvi34LmjJy-vo1WjazsxvisHvBbJiKPy4VA21CguOXlL56Qv9NjCa6p6Fk-xzSsRwmHlhcqqkDcypCXedSpQDV7yr_TGc00GBb1vCgUrCRCqoQy50o_4qQbuvOlDLra7QQm4Z2GEe78S5kPWxffk=w847-h635-no";
                case 7: return "https://lh3.googleusercontent.com/mjlCM-uCuPlIxfMn4EYldB6LbAi5RH6uoCSDziK-cAhNpGvkWzJAdZPAbSXi1WJyGl3ZxbsJcsHbRz7yYHHcC8DdEcuy-uLD2lm_NgTSIUtB-_Aptu8L1Jl7ZYO6iWEfKdJiPdr9I1AiJwLzKxWn076TolOwut0WEqTy_JVc7ZTJIQGKVAmb1V9bEjLAJqGRiDGvUWi53y37hyga9OFt8bWhtTu0WOUPAjy52Bz56tJ5bRX6IbaGYq9cqV64HByvQN_eMQOPWN344cx7wYVC89z5SBHfQzOK0Qo6_1HckNTnUbCn5qlHLaemJz0n_WJhr4Qy8nrk86avdGNSiZ8pPz5CnFvGU4987nBrVJdBcgq7-jLyvmQbLKQSXQWT0EY6X9u_kgkE4ZU2-zkRX-kdaUVTn11vZwzg99RayCM_vEkdWwii7LWAZxegbUlxhl2gf4934GlZc0q1-2XdUs-UYtFNvplJ0jbFqp1M818L0pXqCNTQpwtT5vQMymFKKsqlMGCMAKPH_i8AEHhsdPzUqho6AyoZAefOdkPbjXlkqyeK7iDQtUdGP2-BHokN5EXKfp5ajMRzLHVEAfhWjFXNAyeJuc3g9wBIx-jf0-QoB2jIm8QkVoCrQSKL-yIbXKo6LXJkvNdXrGDurBxMmhyGI2b-eCerNpysKix5e3PDLzA4rHA=w847-h635-no";
            }
            break;
        case "donation":
            switch (slideNum){
                case 0: return "https://lh3.googleusercontent.com/_h2EBvNHnRM1lLRNQ1s3lpgWNHbjMAeq_NfB5ZjXjvO5TAcI6BUR-jjmgjrH5V1i1xkZfTWCWrl0wGh1dnGPLE46GTH16FV0K9qt3oMJeBvzBlVotj0YGB6EdainAlym2LZHB11MPBufE7kqunJfY0vew4_OhWuoaCO4YRzEIwxPNcrDtLa_ua7BLsTzCzjUoAsNKG7Wvgujd0CAozraYT6yqfyqqEI8bs0ul_F3vS-SdJPuAaFAk5ttD4a6CKTTZ3ced2dW8dUvynkQlKrS5ZB9n-YAzM1c8nh1b6kSBj2bpxHd7f0XSxVH39GbIaX3A1WaevCqWxSAdzH0PkKMAy6J2giJDZSPxE9kgTzvd9DfKk6Sy4mvIaATRVHrssS8zBGepks5XJfWQczpByF-KtXCG_3E2L6EDR6TfNnimMO4b3Z7bFUQ1imU0jky_as1-kL-HT_zJs6h0qcOWpHCIBIsB4A1nO3CliqJ1yPtN3MEsAJrMoi0oIj5gTCVmq3RArgLC3zqkRVu2NzRSJZ3sM4PnaEgEd9vdI9IUvbdOS4L7ZOE65PZKddQ5UxnZAMlxd3XIUBPAwL8O_kWONzjn5WVhIyPOzdElitfDt-rwdGMzs0XcHmTW2dG3EM8vehMDLsR8NBicn4a2WBl6tDh50ju0VtVljpVUctooE55pd0RlQA=w447-h794-no";
                case 1: return "https://lh3.googleusercontent.com/6VegJbTZb5EPXLJ0HoM1CK9_gDq9EXpZgf38od2Mlx1zuetYa7vQpK7oFCUBdpVSTTC9ZSoH7VPbCVpB6y9aPCj0oim4ARLgOK2e8LAYjqsvtcy4tbfFFCftV7sKX7t4yTe_CRrC34D0NK72n6s5tjFrXbus1-qAL5nXDR2Bw11YdL1fCcxvXO8fOXm1oEssFTO3JmBXa3WI6d5zRWjr7KpDB11YERJsoxclEqaMORIQlEIGOlzwC3SgIEEqFQnSU3kiAYERD1NVbzxEGRxTuQfHfajhzvAEm2GVAndVO8S32DSTvPOa3hLHwR5LL-7oQs8g0pm-MAt_J29P6dVLavysyxkUDRw7ETkg5eEKyUjdBSm0RSWVFSOyOykVnkJ7H-WnrDiaipsBy9IxDXwAynVUsBIGHzIPU3bkhvGeJs_qcS8qTK-cSvrhdvp-vCDRCRIWeYx2E-J6lXM8aukBeFGQZGBsFj3qtFRTnZpG4jHsVlywbWL-x4oxitV-qFbhNJ_ttNRtNbCvTXBiZCgWrbxo1a_5oD-JMZxJTf3lnWCSfpzxrhNEKheR5kSfTHl9XWQcklhutGAqMOYtq3T9Ows9jQGm90d0XgmTsp9Cz3UsVdxzUMC8MNSLRBmWyq-8xP65XvS4jPnipmAaPmBmSu8c8IXWFx6BRMr72aYgEQrEYKc=w447-h794-no";
                case 2: return "https://lh3.googleusercontent.com/s2mkPPgZSYJwQr3VK_06gLmGwwi0vRTYhB-v6GYre3_HaUin461rMfJRMHQca6uW05T5OuSFeDEhkKRvHbZN_g_S-pDlyB-_lG-ssPGpb0EMru_ssTN5bCrtmZkSG3H_A7Nd0aJBL7PtV6Ch1Paqy1SNvF3zWMsXBrIoIzHjyyC8SSrJ4xwLT37xcYAAWm3SMj1SO8epJmWcFxETkPMD1V9lAlYsM4EgfXerUAF4lmi6n9mL_jFVILbUdwk9jfmB10Y9FRqFMB7tPJXusv3V924pQh-rsJbk-09asKe-8MeXWXZ-I1QM8fRcw9p1vK65V7qjAWLvTAsyklqP5FII9638IPFtJUc7gqs5-8hiV6yi6QM-MZtiihLRRIkEJBxQP3ytjiBB1Yx7wq4bg69BDPkWlRuCGnmLkPp5MEzes1UMBNsdAODsyKcaVMiWqj7oOEYvyR_MY0UKcNcqvfsK6syVWjH3vJTSqjMUaq508RNJjVNTe54goamHOF0XyCQCL26nR2nVTZ9sasaUOKDUyj-AwkbH7eI5MhYZvu_Vmb0qc21EDWjuSinkeiqC920cw4VNYVKjDctiD6P5RzpXPW58zr95Q8VvM-AP0a_s0qhCj1eny9U1jNVLLINwzPvp3GIor4m9UybiK7uC6jIDyoj99V-PvY-xkT1YbPx9kqtapAE=w447-h794-no";
                case 3: return "https://lh3.googleusercontent.com/gtIEpRog-kj8wZksVPnpe67mxsYX8F77bUNJxtPASCgYji2N4NmrwfJg5wlV63y01iQhfs7jl0HiBdkqjjsaamUg8Z4ef5qIkilZNP9SmsFTVSNYLFvqVU8N9zl5ijaOpmmbu_I7F5PvQA4lg3t1_rAEHAuiaxe634Px9MvyCG663V9Eb94n45ZFaYtj6JpzNfkS_-y0erGqJ10g6LHMyLsDy78oKv0yphNIzV3kBNfa1nS0cUkTePmnW77YVXByU4YvR9dKfhRpSE1UOb6uwgNwrHJUe1C4UeHXSfBBcHJqn_UL0jfOPff1EGMkAQZrEetfCkTI82GflgNlOXYIR8CxK1jqxWIE9RdcoDS0dFiv_DHCFWtdkmwlZ26fRILPFHqmOMqmA-q2B3XLNwJj32iWyU3v-OP3BOf5b2j9zqzgVFihE1x_5j6VH3TGuPkB8eHJbHm9tD2vweN4QaMOu-DtbVeG6oEcmGsdZ9xlmZpf3aJXS9GNlY-v87Iaki92Ko6WYFVfKNWsJZw8QjbxGYJUojhwtFVTyn-M-4UV0UGT-8vTDKdTa3Oz5uoeH0kMAE0Ou7y-gl8f-h6sblp7Kt32dF4FJXmDf7QriO3B4n39RrJSsf9oUJSBlpWQKZSi-QT6pKNcIJTlbcez3CyrJHp6iQ8TB94yedbrKSeN7xuAyjY=w447-h794-no";
                case 4: return "https://lh3.googleusercontent.com/TGTglKaDhuF-ey7tGS-4xHKMrclDbZlCiQGT_1wzSaUmCHD6lud4XqTJKzqQOm2bcG4EqIQSKVh50t24zOZNqxYgDFl9LkhZZxqgpM2kA6uc90sU4NUVRQlcYGOf-hOZbB9j0w59nGN7MAPE5s2Y_xofX2nOsB-gxg19NRP8w_4SR3g1S9fKyyIfBIVhqXWbzefJS9BmsXY7lc_WxBvqnG2J2EkfTG38fGtyVcIloGnevvmBdiDqkL9Pb3FiMaQA2s-_rUJHaswaKav1tNPneg1BW7vmRBp_oO7WRWRQgIRdeA0H2HBxnCQbMzfOEiQFWMfVMjRKV8YNIo-4nJz_CHE37UJtd5cZXFz6YB7TOIZTj_vA7oxcPvsF8OjM1o6ZIwyJkq3Yu3p0e0OiGTx5h82Nsz401zq3dpkgp0PNvmHAccd1287ibUQXmcmmMA3A0SUnKldkJmLVovy_cAg06ou8tDcEJjVer_Sc5B1f_uruxY8ysYuDaIjYjxIeFvITfQuHG_XWklT1hg00vcuggzMU4BzBMcoC1hRCQsTGNuLYse-rQpvR30xvJ8i9KYAmxWqSJiOVKm77QUVZhSyRAM3z5i2RNJT9A6HTP8uz86MkaLcwEG44GxIdBV1HzeyM9KfGrkUNrxpjJN_NPOSvpnoRz8kfYcMuS024fyh1MoaY8D0=w447-h794-no";
                case 5: return "https://lh3.googleusercontent.com/TBRLWSDLBv3mRWBb1gQEgxwIr_1dF_uKkHP8Iy55_aIjPuXJdW7pk-BBUaF2YAB4vBXZmPamKkTLpy4aj-a5viwZ3z-8k_T4z7m2Ua-CFZaf7unXgBc4Wv-LXcIg67YvfMMSOOAFb_2JQvQYbCMm70pujwBtCPK2s5BqhsXqYtUsGA9BRW9J1Q8Ntb8yDnH_E3UgRUSgh_TDVfx4fOzHtVFjH4XsGWfayaCAuR4tWvXedR4rjH0Kv-ZPT-pACHylUCgTQPsWk5RhUSmkY9JykopFVOdlJB7ubZSTZcvO881RrSN4Z0n8U8J8lJqAYMXLjqmfr3xeX2tt0umIsR_gepowu6J4HrBdJB1R25dYQpyjDLB_8MG9IZ80XEw_IEZINriFPk2UlUE2uQ19EaaT2s_mo4n2rW5zZLA2hErXh1tZIxcBDb8gqLdK-2a8cXoiu_xITE0V2zYVmP6XSYBXz_4wJsGhGnhjh7OnhrCwvGaU4MT6BxNyIWyMNE6hpde0lscvXEGCz9Nmudz2oC_6JZikuNGX6Y_8jG6Jh8MEgobmpYTWsLS4nXmfc4C7zv9au1ETcCZyVjFOjV-c6CCKZt9aF2BHKVLn4cwct7t7aJRwYxsGlOA6xyW5C3Q7W3Z_tLo8GcnMCnZFHS65_AxAWVoSAaA_-uqcVfNGWrRx49a5XLU=w447-h794-no";
                case 6: return "https://lh3.googleusercontent.com/7u1DnOEhPcgPmrhgymtuzGJQeLFz3T_S7wk2cKS9bmKv3Xj4QV5EPT4YMXsA-XVhLCiHNo6m_Bs1Xtc30W3fj1NWvbWG7kLxaLK3JQ1qi9_m1hT0Qv-0mTqxRwvKFQvosincwoXSTk9YGiASop8DFyzXXT9pYPDaSfpZgJfg3cKaKvQDLzSN0bokD-aXCP5j4G1CvMqg6u75GgcA_6CcDc_mqeM0FIXl-KI-ng6zpWD05ghbC126uZOm4Tb_Xrr8SgI06__GKIyZerF5a04xYPQwYW8-LznwLHXkN7mwJYcEtz3As0gRWFQG5rC-2gr4mJ82U9l_0OJ_Y66n118vyxkcqd1adcJYWyZTEAeBWjzRtFn71Dqb8bjz5nenBfDnjg-WAgpkyy4KU8Anq-vwVBy1hrEC81LwWu9un_Fc8XqxUlaE5NFG-FnqMCl_4e0zYlYBZCwGkR8FXszw-7LnDpEE5hBWL6SvOWaTsN3c1kEN22NLXg0CHgjX5V9rnQCSJb7lFd_6GJU5m9SuVS9ZX7Nt9ygv02PvQNogzeovzkI0fngdUZZA8QVSYQbVqbKZekZzBncoG8dAvw7Dy1aJoDdKnqq12Dl5JFUiStEyLJMmfxgaXCnOh51S-d7-YByhF8PlnGJrl0ixplz3nLuFouXNlfH-rttnvdsk0t3XBnYJG6k=w447-h794-no";
                case 7: return "https://lh3.googleusercontent.com/B9ixJafeXRsJrJX0ZQsXbJXtBk5saeIPgmNxdOxEQnclzL4UlhwZQE9fBthJJZVAWh_burbpjp5Qmq0hl2bjMm30q8jRaK4OrjjfOLIGveAs_tILTaqTC-HvuJ_yXKVHp_uxwx6Tjm20jc64tUDrZ4FGh6AP7gxVyENztNTexiKYMBri2XziR6HNPLy3iLBC6f3eBVy2jvJ-SGWBUI_yOYh7CmDoGynfbsORS7ROPEGbgBgE4YkJJkI61-uAua67koCtrIGVE0DSf3hG5yykkArPPuLGiNHMI484ci3OzTJNXpRYRS9qkK4Xjc8Moj36agPGiMIty76GXIoo0zSYEMPakfr-oCMcrBDkP82_utdGLHSAzPNxT2OjMhxxDethIeTpTGooIOW6PhM5TrNzVZpAePp8UagtWvSoXYh7-PzLOMc2IDcq_iYs6TSP7KsDpyQZdCso10vFOb8rKX3p6u_chB_icdE9n6soIdZmniR1EoJCVritNdRe_JlLSteVgg7DnFDSH8fpl1QciVPHjd1jZaH4N2Eoayp4cMxPfVYnCQ8KXjZmCS3Id8cqkVvxUSfVL-xYXX-UylOUSl93iEICtpZ5dKU5CkDncKQ5igoWG928kr2E9heDcAfMZfoZyyfkMSxpRa2bfgSzMIXy4OX04aD4sd2GNlV7tQce-uHse_0=w447-h794-no";
                case 8: return "https://lh3.googleusercontent.com/fIzrX7pvQTT9sP6bpzpywSLkbKuhbK5-jKM-UC2ImalrgLv12V06esxNoweQcrGDps-BpiG_mgRC9I1x9RsLbmPqX-fq9f0yTd9KnufdK6phMZPGXNutYcjAoBIv5lN6aa-ef-gJO1aZnEMfT_Pdudx1UOsG-riRwTbXjSUs415RrV-6zH4fOTJY1yoRcqCU-y3ImA3j8dstQYWMb8LtVQZg3Wbuu9NljYmUfT8_ZKIMHk2uHgL4n-HCL9VkYmH-8KOhPHK2we4J2J-Y-Iq1WmSrM5QXOM9H4zJmwQp3eZLI6fkl81xa0W52Mj2sx7I-wO_oGtl9TpPGJMMhghOXKU2vDdheFBeRzlChRG83fzL3fWclUkUq4tWvwtWQ7sWx2Qz2psHVmZHdioQtGeH5xrSC-I7TlfxWIs-htKzZMW9NnXqCnmesrkeer9ZFzfNT0QtqnhNf7-H5hxNn7qS0pqBnr12NhH1GYNLnISoDjMLxfNy9SzhVRcllJ7yHK5aQxvSj4K5WzMzheNe0mesxue8IlBWjyX2AFUbNqB7IzlCvBMF-1MSYkHsaY4DfcN6SBniXY2mfHf6i7t5jSVRDkrwmeqRyYG-5iWROkz9mDPOJqsX7PwAgGjFqht40gV-HLyBBuEvxOjImqg69iim4jDkg8mCrlhADi2XOcSjvZ48c5fw=w447-h794-no";
            }
            break;
    }
    return "https://goo.gl/photos/QNeMwnTCSZkCuMzU9";
}

function getTextForProjectPanelState(projectId, slideNum){
    if(slideNum < 0) return "Error; slide < 0";
    if((projectId === "impressionist" && slideNum < impressionistSlideCount) ||
        (projectId === "donation" && slideNum < donationSlideCount)){
        return getFragment("fragments/text/project_slide_captions/" + projectId + (slideNum) + ".txt");
    }
}

function updateButtonsForProject(projectId){
    var slideNumber = getSlideNum(projectId), slideCount = getSlideCount(projectId),
        leftButton = $("#" + projectId + "LeftButton"),
        rightButton = $("#" + projectId + "RightButton");

    if(leftButton === null || rightButton === null) return;

    if(slideNumber === 0){
        leftButton.prop('disabled', true);
    } else {
        leftButton.prop('disabled', false);
    }

    if(slideNumber === slideCount - 1){
        rightButton.prop('disabled', true);
    } else {
        rightButton.prop('disabled', false);
    }
}

function updateButtonVerticalMargins(){
    var impressionistImageHeight = $("#impressionistProjectImage").height(),
        donationImageHeight = $("#donationProjectImage").height();

    $("button.impressionist-button").each(function () {
        $(this).css("margin-top", Math.max(0, impressionistImageHeight/2 - $(this).height()));
    });
    $("button.donation-button").each(function () {
        $(this).css("margin-top", Math.max(0, donationImageHeight/2 - $(this).height()));
    });
}

function updateDonationTextTopMargin(){
    var donationImageHeight = $("#donationProjectImage").height(),
        donationTextElement = $("#donationProjectText");
    donationTextElement.css("margin-top", Math.max(0, donationImageHeight/2 - donationTextElement.height()/2));
}

function updateProjectImageSize(){
    var availableHeight = $(window).height() - $("#bs-example-navbar-collapse-1").height();
    $(".project-image").css("max-height", availableHeight * 0.65);
    $(".background-image").css("max-height", availableHeight * 0.65);

    $("#impressionistProjectBackgroundImage").css("margin-left", $("#impressionistProjectImage").css("margin-left"));
    $("#donationProjectBackgroundImage").css("margin-left", $("#donationProjectImage").css("margin-left"));
}

function updateVisualizerVideoSize(){
    var containerElement = $("#visualizerProjectVideoContainer"), videoElements = $(".project-video");
    var videoWidth = containerElement.width();
    var videoHeight = videoWidth * (9.0/16.0);

    console.log("Setting video size to " + videoWidth + "x" + videoHeight)
    videoElements.width(videoWidth);
    videoElements.height(videoHeight);
}

function updateVerticalMargins(){
    updateButtonVerticalMargins();
    updateDonationTextTopMargin();
    updateProjectImageSize();
    updateProjectImageSize();
}

function changeProjectImage(projectId, direction){
    var imgElement = $("#" + projectId + "ProjectImage"),
        backgroundImgElement = $("#" + projectId + "ProjectBackgroundImage");
    var newSlideNum = getBoundedSlideNum(projectId, getSlideNum(projectId) + direction);
    var preloadSlideNum = getBoundedSlideNum(projectId, newSlideNum + 1);
    var newImgUrl = getImageUrlForProjectPanelState(projectId, newSlideNum),
        preloadImgUrl = getImageUrlForProjectPanelState(projectId, preloadSlideNum);

    if(backgroundImgElement.attr("src") !== newImgUrl){
        backgroundImgElement.attr("src", newImgUrl);
    }
    backgroundImgElement.fadeIn(projectSlideFadeDuration, projectSlideFadeEasing, function () {
        imgElement.attr("src", newImgUrl);
        backgroundImgElement.fadeOut(0, projectSlideFadeEasing);
        backgroundImgElement.attr("src", preloadImgUrl);
    });
}

function changeProjectText(projectId, direction){
    var textElement = $("#" + projectId + "ProjectText");
    var newText = getTextForProjectPanelState(projectId,
        getBoundedSlideNum(projectId, getSlideNum(projectId) + direction));
    textElement.fadeOut(projectSlideFadeDuration/2, projectSlideFadeEasing, function () {
        textElement.html(newText);
        if(projectId === "donation") updateDonationTextTopMargin(false);
        textElement.fadeIn(projectSlideFadeDuration/2, projectSlideFadeEasing);
    })
}

function loadNextSlide(projectId){
    changeProjectImage(projectId, 1);
    changeProjectText(projectId, 1);
    incrementSlide(projectId);
    updateButtonsForProject(projectId);
}


function loadPrevSlide(projectId){
    changeProjectImage(projectId, -1);
    changeProjectText(projectId, -1);
    decrementSlide(projectId);
    updateButtonsForProject(projectId);
}


function launchModalImageForCurrentSlide(projectId){
    $("#modalImage").attr("src", getImageUrlForProjectPanelState(projectId, getSlideNum(projectId)));
    showModalImage();
}