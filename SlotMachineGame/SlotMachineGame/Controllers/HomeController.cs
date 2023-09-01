using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SlotMachineGame.Models;

namespace SlotMachineGame.Controllers;

public class HomeController : Controller
{

    List<HandModel> hands;


    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult BlackJackView()
    {
        return View();
    }
    public IActionResult RouletteWheel()
    {
        return View();
    }


    public IActionResult Privacy()
    {
        return View();
    }


    //BlackJack
    public IActionResult MakeHand(string owner, CardModel Card)
    {
        HandModel hand = new HandModel(owner,Card);
        hands.Add( hand);

        return View("BlackJackView");
    }







    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

