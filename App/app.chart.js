const ctx1 = document.querySelector(".myChart1");
const ctx2 = document.querySelector(".myChart2");
const ctx3 = document.querySelector(".myChart3");

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Sales',
      data: [10, 20, 5, 20, 25, 15, 30],
      borderWidth: 2,
      borderColor: "#fff"
    }]
  },
  options: {
    scales: {
      y: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true
      },
      x: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true,
      }
    },
    plugins: { legend: false }
  }
});

new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Mails',
      data: [400,300,200,700,500,400,300,400,500,600,700,800],
      backgroundColor:"#fff",
      color: "#fff"
    }]
  },
  options: {
    scales: {
      y: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true
      },
      x: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true
      }
    },
    plugins: {
      legend:  false
    }
  }
});

new Chart(ctx3, {
  type: 'line',
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    datasets: [{
      label: 'Tasks',
      data: [200,700,400,250,200,220, 210,200],
      borderWidth: 2,
      borderColor: "#fff"
    }]
  },
  options: {
    scales: {
      y: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true
      },
      x: {
        ticks:{color: "#fff"},
        grid:{color: "#ffffff42"},
        beginAtZero: true
      }
    },
    plugins: {
      legend: { display: false }
    }
  }
});







