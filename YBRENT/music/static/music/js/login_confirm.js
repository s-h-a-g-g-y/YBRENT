/*** Created by shaggy89 on 14-11-2017**/

function login_page() {
    var c = confirm("Are u sure u wanna login??");
    if(c)
        window.location('music:login_user');
    else
        window.location('music:login');
}