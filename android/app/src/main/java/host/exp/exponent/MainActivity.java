package host.exp.exponent;

import android.os.Bundle;

import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import expo.core.interfaces.Package;
import host.exp.exponent.generated.DetachBuildConstants;
import host.exp.exponent.experience.DetachActivity;

import android.content.Intent;     // <--- import
import android.os.Bundle;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

public class MainActivity extends DetachActivity {
  CallbackManager mCallbackManager; 

  @Override
  protected List<ReactPackage> getPackages() {
    mCallbackManager = new CallbackManager.Factory().create();
    ReactPackage packages[] = new ReactPackage[]{
        new MainReactPackage(),
        new FBSDKPackage(mCallbackManager),
    };
    return Arrays.<ReactPackage>asList(packages);
  }

  @Override
  public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
  }

  @Override
  public String publishedUrl() {
    return "exp://exp.host/@rhmtrz/counter-app";
  }

  @Override
  public String developmentUrl() {
    return DetachBuildConstants.DEVELOPMENT_URL;
  }

  @Override
  public List<String> sdkVersions() {
    return new ArrayList<>(Arrays.asList("29.0.0"));
  }

  @Override
  public List<ReactPackage> reactPackages() {
    return ((MainApplication) getApplication()).getPackages();
  }

  @Override
  public List<Package> expoPackages() {
    // Here you can add your own packages.
    return super.expoPackages();
  }

  @Override
  public boolean isDebug() {
    return BuildConfig.DEBUG;
  }

  @Override
  public Bundle initialProps(Bundle expBundle) {
    // Add extra initialProps here
    return expBundle;
  }
}
