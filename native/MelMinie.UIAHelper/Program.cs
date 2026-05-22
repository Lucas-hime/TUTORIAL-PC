using System.Text.Json;
using System.Windows.Automation;

record UiaQuery(string Mode, string? ProcessName, string? ElementName);

if (args.Length == 0) { Console.WriteLine("{\"error\":\"missing args\"}"); return; }
var query = JsonSerializer.Deserialize<UiaQuery>(args[0]);
if (query is null) { Console.WriteLine("{\"error\":\"invalid query\"}"); return; }

object ToRect(System.Windows.Rect rect) => new { x = rect.X, y = rect.Y, width = rect.Width, height = rect.Height };

if (query.Mode == "activeWindow")
{
    var focused = AutomationElement.FocusedElement;
    Console.WriteLine(JsonSerializer.Serialize(new {
        mode = "activeWindow",
        name = focused?.Current.Name,
        className = focused?.Current.ClassName,
        processId = focused?.Current.ProcessId,
        bounds = focused is null ? null : ToRect(focused.Current.BoundingRectangle)
    }));
    return;
}

if (query.Mode == "findElementByName" && !string.IsNullOrWhiteSpace(query.ElementName))
{
    var root = AutomationElement.RootElement;
    var condition = new PropertyCondition(AutomationElement.NameProperty, query.ElementName);
    var element = root.FindFirst(TreeScope.Descendants, condition);
    Console.WriteLine(JsonSerializer.Serialize(new {
        mode = "findElementByName",
        found = element is not null,
        name = element?.Current.Name,
        className = element?.Current.ClassName,
        bounds = element is null ? null : ToRect(element.Current.BoundingRectangle)
    }));
    return;
}

Console.WriteLine("{\"error\":\"unsupported mode\"}");
