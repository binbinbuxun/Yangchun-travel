function validateLogin() {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const nameRegex = /^[a-zA-Z0-9_]{5,20}$/;
    const passwordRegex = /^[a-zA-Z0-9_!@#$%^&*]{6,20}$/;

    if (!nameRegex.test(name)) {
        showErrorModal("用户名格式不正确，应为5到20位字母、数字或下划线。");
        return;
    }

    if (!passwordRegex.test(password)) {
        showErrorModal("密码格式不正确，应为6到20位字母、数字或特殊字符。");
        return;
    }

    findData(name, password);
}

function findData(name, password) {
    let message = document.getElementById("mes");

    let str = localStorage.getItem(name);
    if (!str) {
        showErrorModal("账号未注册，请先注册");
        return;
    }

    let data = JSON.parse(str);

    if (data.password === password) {
        alert("登录成功！");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        showErrorModal("账号或密码不正确，请重试或注册新账号。");
    }
}

// 显示模态框
function showModal() {
    document.getElementById('myModal').style.display = 'block';
}

// 关闭模态框
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// 显示错误模态框
function showErrorModal(message) {
    document.getElementById('errorMessage').innerText = message;
    document.getElementById('errorModal').style.display = 'block';
}

// 关闭错误模态框
function closeErrorModal() {
    document.getElementById('errorModal').style.display = 'none';
}
