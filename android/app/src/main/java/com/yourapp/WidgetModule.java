package com.yourapp;

import android.appwidget.AppWidgetManager;
import android.content.ComponentName;
import android.content.Context;
import android.widget.RemoteViews;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class WidgetModule extends ReactContextBaseJavaModule {

    private static ReactApplicationContext reactContext;

    WidgetModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "WidgetModule";
    }

    @ReactMethod
    public void updateWidget(String eventTitle) {
        Context context = getReactApplicationContext();
        AppWidgetManager appWidgetManager = AppWidgetManager.getInstance(context);
        ComponentName thisWidget = new ComponentName(context, YourWidgetProvider.class);
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.widget_layout);
        views.setTextViewText(R.id.widget_event, eventTitle);
        appWidgetManager.updateAppWidget(thisWidget, views);
    }
}